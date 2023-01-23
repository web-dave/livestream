import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossComponent } from './gloss.component';

describe('GlossComponent', () => {
  let component: GlossComponent;
  let fixture: ComponentFixture<GlossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlossComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
