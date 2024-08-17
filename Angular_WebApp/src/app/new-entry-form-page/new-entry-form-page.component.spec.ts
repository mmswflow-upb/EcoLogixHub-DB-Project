import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEntryFormPageComponent } from './new-entry-form-page.component';

describe('NewEntryFormPageComponent', () => {
  let component: NewEntryFormPageComponent;
  let fixture: ComponentFixture<NewEntryFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewEntryFormPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewEntryFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
