import { Component, ContentChild, AfterViewInit, OnInit, ViewChild, ContentChildren, ElementRef } from '@angular/core';
import { ChildContentComponent } from './child-content/child-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  //@ContentChild does not work need to use viewchild to access child property or function, child can be paragraph or child component
  // @ContentChild('child_Class') childClass!: ChildContentComponent; 
  @ViewChild ('child_Class') viewChildClass!: ChildContentComponent;
  @ContentChildren('parent_Class') parentClass !: ElementRef;
  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {
    this.viewChildClass.changeFont();
    // this.viewChildClass.alertMe();
  }

}
