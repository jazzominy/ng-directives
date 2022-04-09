import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html'
})
export class SwitchComponent implements OnInit {

  @Input() on: boolean | undefined;
  @Input() className: string | undefined;

  constructor() { }

  ngOnInit() {
  }

}
