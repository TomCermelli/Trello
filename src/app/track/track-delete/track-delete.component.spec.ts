import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackDeleteComponent } from './track-delete.component';

describe('TrackDeleteComponent', () => {
  let component: TrackDeleteComponent;
  let fixture: ComponentFixture<TrackDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
