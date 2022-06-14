import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPolicy } from 'src/app/model/policy';

@Component({
  selector: 'app-policy-edit-dialog',
  templateUrl: './policy-edit-dialog.component.html',
  styleUrls: ['./policy-edit-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PolicyEditDialog {
  policyForm: FormGroup;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialogRef<PolicyEditDialog>,
    @Inject(MAT_DIALOG_DATA) public data: IPolicy
  ) {
    this.policyForm = this.fb.group({
      Name: [data?.policyHolder.name, Validators.required],
      Age: [data?.policyHolder.age, [Validators.required, Validators.min(1), Validators.max(100)]],
      Gender: [data?.policyHolder.gender, Validators.required],
    });
  }

  onSubmit(policyForm: FormGroup): void {
    this.isSubmitted = true;
    if (policyForm.invalid) return;
    this.isSubmitted = false;
    this.dialog.close(policyForm.value);
  }
}
