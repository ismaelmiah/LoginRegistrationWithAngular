import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMdComponent } from './about-me.component';

describe('AboutMdComponent', () => {
  let component: AboutMdComponent;
  let fixture: ComponentFixture<AboutMdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
