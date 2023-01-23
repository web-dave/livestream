import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HurzComponent } from './hurz.component';

describe('HurzComponent', () => {
  let component: HurzComponent;
  let fixture: ComponentFixture<HurzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HurzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HurzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
