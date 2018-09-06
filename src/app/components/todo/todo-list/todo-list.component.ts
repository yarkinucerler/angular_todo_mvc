import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from "../../../models/todo/todo.model";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input()
  todos: Array<Todo>;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

    onToggleTodoComplete(todo: Todo) {
        this.toggleComplete.emit(todo);
    }

    onRemoveTodo(todo: Todo) {
        this.remove.emit(todo);
    }

}
