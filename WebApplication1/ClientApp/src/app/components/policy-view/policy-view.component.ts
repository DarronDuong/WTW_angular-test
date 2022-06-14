import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PolicyEditDialog } from 'src/app/dialogs/policy-edit-dialog/policy-edit-dialog.component';
import { IPolicy } from 'src/app/model/policy';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-policy-view',
  templateUrl: './policy-view.component.html',
  styleUrls: ['./policy-view.component.css'],
})
export class PolicyViewComponent {
  policies$: Observable<IPolicy[]>;
  selectedView = 'grid';

  constructor(private policyService: PolicyService, private dialog: MatDialog) {
    this.policyService.getPolicies().subscribe();
    this.policies$ = this.policyService.policies$;
  }

  onAddNew(): void {
    const ref = this.dialog.open(PolicyEditDialog, {
      width: '500px'
    });

    ref.afterClosed().subscribe((res) => {

      if (res) {
        const newPolicy = {
          policyNumber: 0,
          policyHolder: {
            name: res.Name,
            age: res.Age,
            gender: res.Gender,
          },
        } as IPolicy;

        this.policyService.addPolicy(newPolicy).subscribe();
      }
    });
  }
}
