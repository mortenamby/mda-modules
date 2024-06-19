import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdaTodoComponent } from './mda-todo.component';

describe('MdaTodoComponent', () => {
  let component: MdaTodoComponent;
  let fixture: ComponentFixture<MdaTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MdaTodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdaTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
