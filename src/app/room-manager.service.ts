import { Injectable } from "@angular/core";
import { Product } from "./Product";
import { ROOMS } from "./mock-rooms";
import { Room } from "./Room";

@Injectable({
  providedIn: "root",
})
export class RoomManagerService {
  rooms: Room[];
  constructor() {
    this.rooms = ROOMS;
  }


  addProduct(roomId: number, product: Product) {
    let room = this.getRoom(roomId);
    room.addProduct(product);
  }

  removeProduct(roomId: number, productId: number) {
    let room = this.getRoom(roomId);
    room.removeProduct(productId);
  }

  getRoom(id: number) : Room {
    let filteredRooms: Room[] = this.rooms.filter((room) => {
      return room.getId() === id;
    });

    return filteredRooms[0];
  }

  getRooms() : Room[] {
    return this.rooms;
  }
}
