import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IPolicy } from '../model/policy';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class PolicyService {
  policies$ = new BehaviorSubject<IPolicy[]>([]);

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getPolicies(): Observable<IPolicy[]> {
    return this.http.get<IPolicy[]>(`${environment.apiUrl}/policy`).pipe(
      tap((res) => this.policies$.next(res)),
      catchError((error) => {
        this.toastr.error('', 'Something went wrong');
        return throwError(`${error.status}: ${error.statusText}`);
      })
    );
  }

  addPolicy(policy: IPolicy): Observable<IPolicy[]> {
    return this.http
      .post<IPolicy[]>(`${environment.apiUrl}/policy`, policy)
      .pipe(
        tap((res) => {
          this.policies$.next(res);
          this.toastr.success(
            'New policy has been added successfully',
            'Policy added !'
          );
        }),
        catchError((error) => {
          this.toastr.error('', 'Something went wrong');
          return throwError(`${error.status}: ${error.statusText}`);
        })
      );
  }

  updatePolicy(policy: IPolicy): Observable<IPolicy[]> {
    return this.http
      .put<IPolicy[]>(`${environment.apiUrl}/policy`, policy)
      .pipe(
        tap((res) => {
          this.policies$.next(res);
          this.toastr.success(
            `Policy number #${policy.policyNumber} has been updated successfully`,
            'Policy updated !'
          );
        }),
        catchError((error) => {
          this.toastr.error('', 'Something went wrong');
          return throwError(`${error.status}: ${error.statusText}`);
        })
      );
  }

  deletePolicy(policyNumber: number): Observable<IPolicy[]> {
    return this.http
      .delete<IPolicy[]>(`${environment.apiUrl}/policy/${policyNumber}`)
      .pipe(
        tap((res) => {
          this.policies$.next(res);
          this.toastr.success(
            `Policy number #${policyNumber} has been removed successfully`,
            'Policy removed !'
          );
        }),
        catchError((error) => {
          this.toastr.error('', 'Something went wrong');
          return throwError(`${error.status}: ${error.statusText}`);
        })
      );
  }
}
