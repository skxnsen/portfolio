import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageUpButtonComponent } from './page-up-button.component';

describe('PageUpButtonComponent', () => {
  let component: PageUpButtonComponent;
  let fixture: ComponentFixture<PageUpButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageUpButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageUpButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
