import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: `<ng-content></ng-content>`,
})
export class ToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
