import { Component, Input } from '@angular/core';
import { IPolicy } from 'src/app/model/policy';

@Component({
  selector: 'app-policy-grid-view',
  templateUrl: './policy-grid-view.component.html',
  styleUrls: ['./policy-grid-view.component.scss']
})
export class PolicyGridViewComponent {

  @Input() data: IPolicy[] = [];
}
