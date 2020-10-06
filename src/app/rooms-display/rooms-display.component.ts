import { Component, OnInit } from '@angular/core';
import { RoomManagerService } from '../room-manager.service';
import { IdGeneratorService } from '../id-generator.service';

import { Room } from '../Room';
import { Product } from '../Product';

@Component({
  selector: 'app-rooms-display',
  templateUrl: './rooms-display.component.html',
  styleUrls: ['./rooms-display.component.sass']
})
export class RoomsDisplayComponent implements OnInit {
  selectedRoom: Room;
  onSelect(room: Room): void {
  this.selectedRoom = room;
}

addProduct(roomId: number, productName: string) {
  this.roomManager.addProduct(roomId, new Product(this.idGenerator.generateId() ,productName, false, 0))
}

removeProduct(roomId: number, prodId: number) {
  this.roomManager.removeProduct(roomId, prodId)
}

turnOffAll(roomId: number) {
  this.roomManager.turnOffAll(roomId);
}

turnOnAll(roomId: number) {
  this.roomManager.turnOnAll(roomId);
}

  private rooms: Room[];

  constructor(private roomManager:RoomManagerService, private idGenerator:IdGeneratorService) { }

  ngOnInit() {
    this.rooms = this.roomManager.getRooms();
  }

}

/* TO DO LIST:
  1. Management Interface 
    a. Complete Product Functions
  2. Room Creation/Removal
  3. Database
  */
