import { Component, ViewChild,OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child-content',
  templateUrl: './child-content.component.html',
  styleUrls: ['./child-content.component.scss']
})
export class ChildContentComponent implements OnInit,AfterViewInit {
  @ViewChild('samParagraph') para! : ElementRef 
  ngAfterViewInit(): void {
    this.para.nativeElement.style.color = 'red';
  }

  ngOnInit(): void {
      
  }

  changeFont(){
    this.para.nativeElement.style.font = 'italic bold 20px arial,serif'
  }

  alertMe(){
    alert('child class is called')
  }



}
