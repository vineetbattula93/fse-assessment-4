import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the main logo in an img tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    const navLinks = compiled.querySelectorAll('a');
    expect(navLinks[0].querySelector('img').src).toContain('assets/images/Ali-Snobba-Main-Logo.png');
  });

});
