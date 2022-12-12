import { Component, OnInit } from '@angular/core';
import { DataProviderDirective } from '../data-provider.directive';

@Component({
  selector: 'app-child-one-one',
  templateUrl: './child-one-one.component.html',
  styleUrls: ['./child-one-one.component.css']
})
export class ChildOneOneComponent implements OnInit {

  constructor(
    private dataProvider: DataProviderDirective
  ) { }

  ngOnInit(): void {
    console.info('******************ChildOneOneComponent -> ', this.dataProvider?.dataProvider)
  }

}
