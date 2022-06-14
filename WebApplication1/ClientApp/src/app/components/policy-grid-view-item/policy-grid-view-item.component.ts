import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IPolicy } from 'src/app/model/policy';
import { DialogService } from 'src/app/services/dialog.service';
import { PolicyService } from 'src/app/services/policy.service';
import { PolicyEditDialog } from '../../dialogs/policy-edit-dialog/policy-edit-dialog.component';

@Component({
  selector: 'app-policy-grid-view-item',
  templateUrl: './policy-grid-view-item.component.html',
  styleUrls: ['./policy-grid-view-item.component.css'],
})
export class PolicyGridViewItemComponent {
  isEdit = false;

  @Input() item: IPolicy | undefined = undefined;

  constructor(
    private dialog: MatDialog,
    private dialogService: DialogService,
    private policyService: PolicyService
  ) {}

  onDelete(): void {
    this.dialogService
      .confirm(
        `Are you sure you want to delete policy #${this.item?.policyNumber}`
      )
      .then((isConfirmed) => {
        if (isConfirmed && this.item?.policyNumber) {
          this.policyService.deletePolicy(this.item.policyNumber).subscribe();
        }
      });
  }

  onEdit(): void {
    const ref = this.dialog.open(PolicyEditDialog, {
      width: '500px',
      data: this.item,
    });

    ref.afterClosed().subscribe((res) => {
      console.log(res);

      if (res) {
        const updatedPolicy = {
          policyNumber: this.item?.policyNumber || 0,
          policyHolder: {
            name: res.Name,
            age: res.Age,
            gender: res.Gender,
          },
        } as IPolicy;

        this.policyService.updatePolicy(updatedPolicy).subscribe();
      }
    });
  }
}
