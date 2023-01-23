import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'platform',
})
export class ApiService {
  t = new Date();
  constructor() {}
  getDate() {
    return this.t;
  }
}
