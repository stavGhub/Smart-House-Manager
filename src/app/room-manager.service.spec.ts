import { TestBed } from '@angular/core/testing';

import { RoomManagerService } from './room-manager.service';
import { Product } from './Product';
import { Room } from './Room';

describe('RoomManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomManagerService = TestBed.get(RoomManagerService);
    expect(service).toBeTruthy();
  });

  describe('addProduct', () => {
    it('should add a product to a room with id', () => {
      const service: RoomManagerService = TestBed.get(RoomManagerService);
      service.addProduct(1, new Product(1, "Lamp", false, 0));
      let room: Room = service.getRoom(1);
      expect(room.getId()).toBe(1);

      let products: Product[] = room.getProducts(); 
      expect(products[0].name).toBe("Lamp");
    });
  })
});
