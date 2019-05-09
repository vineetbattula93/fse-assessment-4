import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { Router } from '@angular/router';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a first nav bar link with the logo in an img tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    const navLinks = compiled.querySelectorAll('a');
    expect(navLinks[0].querySelector('img').src).toContain('assets/images/lamp.png');
  });

  it('should have a second nav bar link with "Shop For Clothing" as the inner text that navigates to the Product Search Component', () => {
    const compiled = fixture.debugElement.nativeElement;
    const navLinks = compiled.querySelectorAll('a');
    expect(navLinks[1].textContent).toEqual('Shop For Clothing');
  });

  // -----------Start Here!!---Make These Pass--------------
  it('should redirect to /home url when app first loads',
    async(inject([Router, Location], (router: Router, location: Location) => {

    router.initialNavigation(); // needed to perform redirectTo

    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/home');
    });
  })));

  it('should navigate to /shop url when the "Shop for Clothing" link is clicked',
    async(inject([Router, Location], (router: Router, location: Location) => {
    const compiled = fixture.debugElement.nativeElement;
    const navLinks = compiled.querySelectorAll('a');

    navLinks[1].click();

    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/shop');
    });
  })));

});
