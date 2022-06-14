import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialog } from '../dialogs/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  async confirm(text: string): Promise<boolean> {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      height: 'auto',
      width: '500px',
      data: {
        title: 'Confirmation',
        text,
      },
    });

    const isConfirmed = await dialogRef.afterClosed().toPromise();
    return await Promise.resolve(isConfirmed); // will return a Promise here
  }
}
