import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantic-card',
  templateUrl: './quantic-card.component.html',
  styleUrls: ['./quantic-card.component.scss']
})
export class QuanticCardComponent implements OnInit {
  clickMessage: 'text';
  value = '';

  constructor() { }

  ngOnInit() {
  }

  onShow() {
    alert('Show button clicked!');
  }

  onEnter(value: string) { this.value = value; }
}
