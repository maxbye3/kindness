import {Component, OnInit,  ElementRef, Input } from 'angular2/core';


@Component({ 
    selector: '[myHighlight]',
    template: `
      <div [myHighlight]="color">
  <input type="radio" name="colors" (click)="color='lightgreen'">Green
  <input type="radio" name="colors" (click)="color='yellow'">Yellow
  <input type="radio" name="colors" (click)="color='cyan'">Cyan
       </div>
  `,
    host: {
    '(mouseenter)': 'onMouseEnter()',
   // '(mouseleave)': 'onMouseLeave()'
       }
 })

export class HighlightDirective {
  private _defaultColor = 'red';
  private el: HTMLElement;
  constructor(el: ElementRef) { this.el = el.nativeElement; }
  
  @Input('myHighlight') highlightColor: string;

  

  onMouseEnter() { 
      this.highlight(this.highlightColor || this._defaultColor); 
       }
 // onMouseLeave() { this.highlight(null); }


  private highlight(color:string) {
    this.el.style.backgroundColor = color;
  }
}