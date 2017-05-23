import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiginComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SiginComponent;
  let fixture: ComponentFixture<SiginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
