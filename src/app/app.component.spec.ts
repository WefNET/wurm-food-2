import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';

describe('AppComponent', () => {
  let config = appConfig;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [config.providers],
      imports: [AppComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'WurmFood2'`, () => {
    expect(component.title).toEqual('WurmFood2');
  });

  // it('should render the title', () => {
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('demo-angular-jest app is running!');
  // });
});
