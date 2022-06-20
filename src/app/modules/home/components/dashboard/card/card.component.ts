import { Component, Input } from '@angular/core';

@Component({
  selector: 'dashboard-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class DashboardCardComponent {

  constructor() { }

  @Input() item: any;

}
