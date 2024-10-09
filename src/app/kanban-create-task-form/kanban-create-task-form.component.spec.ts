import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanCreateTaskFormComponent } from './kanban-create-task-form.component';

describe('KanbanCreateTaskFormComponent', () => {
  let component: KanbanCreateTaskFormComponent;
  let fixture: ComponentFixture<KanbanCreateTaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanbanCreateTaskFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbanCreateTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
