import {Component, EventEmitter, Output} from '@angular/core';

import {Todo} from "../../../models/todo/todo.model";

@Component({
  selector: 'todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.scss']
})
export class TodoListHeaderComponent {

    todo: Todo = new Todo();

    @Output()
    add: EventEmitter<Todo> = new EventEmitter();

    constructor() {
    }

    addTodo(todo) {
        this.add.emit(todo);
        this.todo = new Todo();
    }

}
