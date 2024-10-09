import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanUpdateTaskFormComponent } from './kanban-update-task-form.component';

describe('KanbanUpdateTaskFormComponent', () => {
  let component: KanbanUpdateTaskFormComponent;
  let fixture: ComponentFixture<KanbanUpdateTaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanbanUpdateTaskFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbanUpdateTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
