import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'kit-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

  nowdate = new Date();

  constructor() {}

  ngOnInit() {}
}
