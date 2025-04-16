import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdBackComponent } from './cd-back.component';

describe('CdBackComponent', () => {
  let component: CdBackComponent;
  let fixture: ComponentFixture<CdBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdBackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
