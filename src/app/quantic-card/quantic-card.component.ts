import { Component, OnInit } from '@angular/core';
import { PasswordService } from "../services/password.service";

@Component({
  selector: 'app-quantic-card',
  templateUrl: './quantic-card.component.html',
  styleUrls: ['./quantic-card.component.scss']
})
export class QuanticCardComponent implements OnInit {

  public clickMessage: 'text';
  public value = '';

  constructor(private passService: PasswordService) { }

  ngOnInit() {
  }

  onShow() {
    alert('Show button clicked!');
  }

  onEnter(value: string) { this.value = value; }

  public getPasswordTest() {
    this.passService.fetchPassword().then(data => console.log(data));
  }
}
