export class Product {
  id: number;
  name: string;
  state: boolean;
  runTime: number;

  constructor(id: number,name: string, state: boolean, runTime: number) {
    this.name = name;
    this.state = state;
    this.runTime = runTime;
    this.id = id;
  }

  getState(): boolean {
    return this.state;
  }

  getName(): string {
    return this.name;
  }

  getId(): number {
    return this.id;
  }

  getRunTime(): number {
    return this.runTime;
  }

  turnOn(): void {
    this.state = true;
    this.runTime = this.runTime+1;
  }

  turnOff(): void {
    this.state = false;
  }
}
