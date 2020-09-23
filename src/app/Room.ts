import { Product } from "./Product";

export class Room {
  id: number;
  name: string;
  prodList: Product[];

  constructor(id, name) {
    this.name = name;
    this.id = id;
    this.prodList = new Array();
  }

  getName(): string {
    return this.name;
  }

  getId(): number {
    return this.id;
  }

  getProducts(): Product[] {
    return this.prodList;
  }

  addProduct(product: Product): void {
    this.prodList.push(product);
  }

  removeProduct(id: number): void {
    this.prodList = this.prodList.filter(prod => {
      return prod.getId() != id;
    });
  }
}
