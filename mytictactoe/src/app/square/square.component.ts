import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  template: `
    <button>{{value}}</button>
  `,
  styles: `
    :host {
      display: block;
    }
    button{
      width:100%;
      height:100%;
      font-size: 150px;
    }
  `,
  encapsulation: ViewEncapsulation.Emulated
})
export default class SquareComponent {
  @Input() value!: 'X' | 'O'
}
