import { Injectable } from '@angular/core';
import * as json from '../assets/json.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  list;

  constructor() { this.list = json; }


}
