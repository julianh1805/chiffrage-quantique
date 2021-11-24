import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable, of} from "rxjs";
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Password } from '../quantic-card/Password';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private passwordUrl = {
    classic: 'generator',
    custom: 'generatorCustom'
  };

  constructor(private http: HttpClient) { }

  public getPassword(): Observable<Password> {
    return this.http.get<Password>(`${environment.host}/${this.passwordUrl.classic}`);
  }

  public getPasswordWithCriteria(sizePass: number, nbPass: number): Observable<Password[]> {
    return this.http.get<Password[]>(`${environment.host}/${this.passwordUrl.custom}/${sizePass}/${nbPass}`);
  }
}