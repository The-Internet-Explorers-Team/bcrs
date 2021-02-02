import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
<<<<<<< HEAD
=======
  
>>>>>>> e517f00a2d6e089d2d4f728c10528c6c6cc7e082
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
