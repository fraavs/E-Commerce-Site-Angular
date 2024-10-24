import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatnavigationComponent } from './catnavigation.component';

describe('CatnavigationComponent', () => {
  let component: CatnavigationComponent;
  let fixture: ComponentFixture<CatnavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatnavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatnavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
