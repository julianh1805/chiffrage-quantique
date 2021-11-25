import { Component, OnInit } from '@angular/core';
import { PasswordService } from "../services/password.service";
import { EntropyMeasureService } from "../services/entropy-measure.service";
import { Password } from './Password';
import { EntropyLevel } from '../services/EntropyLevels';

@Component({
  selector: 'app-quantic-card',
  templateUrl: './quantic-card.component.html',
  styleUrls: ['./quantic-card.component.scss']
})
export class QuanticCardComponent implements OnInit {
  public sizePass: number = 5; 
  public nbPass: number = 3;

  public password: Password = '';
  public customPasswords: Password[] = [];

  constructor(private passService: PasswordService,
              private entropyMeasureService: EntropyMeasureService) { }

  ngOnInit() {}

  generatePassword() { 
    this.passService.getPassword()
      .subscribe(password => this.password = password);
  }

  generatePasswordWithCriterias() {
    this.passService.getPasswordWithCriteria(this.sizePass, this.nbPass)
      .subscribe(customPasswords => {
        this.customPasswords = Object.values(customPasswords);
      });
  }

  entropy(input: string) : string {
    return this.entropyMeasureService.evaluate(input);
  }

  entropyComs(input: string): string {
    switch(this.entropy(input)) {
      case 'bad': {
        return 'mauvais';
      }
      case 'acceptable': {
        return 'acceptable'
      }
      case 'good': {
        return 'bon mot de passe'
      }
      case 'veryGood': {
        return 'très bon mot de passe'
      }
    }
  }


}
