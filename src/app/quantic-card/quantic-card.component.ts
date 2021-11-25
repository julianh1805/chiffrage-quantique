import { Component, OnInit } from '@angular/core';
import { PasswordService } from "../services/password.service";
import { EntropyMeasureService } from "../services/entropy-measure.service";
import { Password } from './Password';
import { EntropyLevel } from '../services/EntropyLevels';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quantic-card',
  templateUrl: './quantic-card.component.html',
  styleUrls: ['./quantic-card.component.scss']
})
export class QuanticCardComponent implements OnInit {
  // faCoffee = faCoffee;

  public sizePass: number = 5; 
  public nbPass: number = 3;

  public password = {
    entropy: null,
    value: ''
  };
  public customPasswords: Object[] = [];

  constructor(private passService: PasswordService,
              private entropyMeasureService: EntropyMeasureService) { }

  ngOnInit() {}

  generatePassword() { 
    this.passService.getPassword()
      .subscribe(password => {
        this.password = {
          entropy: this.entropy(password),
          value: password
        };
      });
  }

  generatePasswordWithCriterias() {
    this.passService.getPasswordWithCriteria(this.sizePass, this.nbPass)
      .subscribe(customPasswords => {
        this.customPasswords = Object.values(customPasswords).map(password => {
          return {
            entropy: this.entropy(password),
            value: password
          };
        })
      });
  }

  entropy(input: string) : EntropyLevel {
    return this.entropyMeasureService.evaluate(input);
  }

  entropyComs(input: EntropyLevel): string {
    switch(input) {
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

  entropyIcon(input: EntropyLevel): string {
    switch(input) {
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
