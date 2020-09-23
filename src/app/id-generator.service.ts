import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdGeneratorService {
  id: number;
  constructor() { 
    this.id = 0
  }
  generateId(): number {
    this.id = this.id+1;
    return this.id;
  }
}



