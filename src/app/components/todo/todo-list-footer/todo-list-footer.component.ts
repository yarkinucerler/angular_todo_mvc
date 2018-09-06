import {Component, Input} from '@angular/core';
import {Todo} from "../../../models/todo/todo.model";

@Component({
  selector: 'todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.scss']
})
export class TodoListFooterComponent {

    @Input()
    todos: Array<Todo>;

  constructor() { }

}
