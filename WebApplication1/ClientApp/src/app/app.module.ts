import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PolicyGridViewComponent } from './components/policy-grid-view/policy-grid-view.component';
import { PolicyViewComponent } from './components/policy-view/policy-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PolicyGridViewItemComponent } from './components/policy-grid-view-item/policy-grid-view-item.component';
import { PolicyEditDialog } from './dialogs/policy-edit-dialog/policy-edit-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialog } from './dialogs/confirm-dialog/confirm-dialog.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    PolicyGridViewComponent,
    PolicyViewComponent,
    PolicyGridViewItemComponent,
    PolicyEditDialog,
    ConfirmDialog
  ],
  imports: [
    BrowserModule,
    MatButtonToggleModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
  }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
