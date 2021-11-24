import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  private passwordUrl = 'api/password';

  constructor(private http: HttpClient) { }

  public getPassword() : Observable<String> {
    return this.http.get<String>(this.passwordUrl);
  }

  public async fetchPassword() {
    const response = await fetch('http://localhost');
    return await response.text();

  }
}
