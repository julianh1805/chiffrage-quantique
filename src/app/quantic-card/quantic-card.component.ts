import { Component, OnInit } from '@angular/core';
import { PasswordService } from "../services/password.service";
import { EntropyMeasureService } from "../services/entropy-measure.service";
import { PasswordInfo, Password, PasswordEntropicStyle } from './Password';
import { EntropyLevel } from '../services/EntropyLevels';
import { faFrown, faSmile, faSmileBeam, faLaughBeam } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quantic-card',
  templateUrl: './quantic-card.component.html',
  styleUrls: ['./quantic-card.component.scss']
})
export class QuanticCardComponent implements OnInit {
  faSmile = faSmile;

  public sizePass: number = 5;
  public nbPass: number = 3;
  public password = {
    entropy: null,
    value: ''
  };
  public customPasswords: PasswordInfo[] = [];
  generatingPasswords = false;
  generatingPasswordsWithC = false;

  constructor(private passService: PasswordService,
              private entropyMeasureService: EntropyMeasureService) { }

  ngOnInit() {}

  generatePassword() {
    this.generatingPasswords = true;
    this.passService.getPassword()
      .subscribe(password => {
        this.password = {
          entropy: this.entropy(password),
          value: password
        };
        this.generatingPasswords = false;
      });
  }

  generatePasswordWithCriterias() {
    this.generatingPasswordsWithC = true;
    this.passService.getPasswordWithCriteria(this.sizePass, this.nbPass)
      .subscribe(customPasswords => {
        this.customPasswords = Object.values(customPasswords).map(password => {
          this.generatingPasswordsWithC = false;
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

  entropyComs(input: EntropyLevel): PasswordEntropicStyle {
    switch(input) {
      case 'bad': {
        return {
          comment: 'mauvais',
          icon: faFrown,
          color: '#c0392b'
        };
      }
      case 'acceptable': {
        return {
          comment: 'acceptable',
          icon: faSmile,
          color: '#e67e22'
        };
      }
      case 'good': {
        return {
          comment: 'bon mot de passe',
          icon: faSmileBeam,
          color: '#3498db'
        };
      }
      case 'veryGood': {
        return {
          comment: 'très bon mot de passe',
          icon: faLaughBeam,
          color: '#2ecc71'
        };
      }
    }
  }
}
