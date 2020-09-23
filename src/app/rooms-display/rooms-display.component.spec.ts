import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RoomsDisplayComponent } from "./rooms-display.component";

describe("RoomsDisplayComponent", () => {
  let component: RoomsDisplayComponent;
  let fixture: ComponentFixture<RoomsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsDisplayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    //expect(component).toBeTruthy();
  });
});
