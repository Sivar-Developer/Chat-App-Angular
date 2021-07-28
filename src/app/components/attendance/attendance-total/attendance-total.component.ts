import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance-total',
  templateUrl: './attendance-total.component.html',
  styleUrls: ['./attendance-total.component.scss']
})
export class AttendanceTotalComponent implements OnInit {

  @Input() total: any

  constructor() { }

  ngOnInit(): void {
  }

}
