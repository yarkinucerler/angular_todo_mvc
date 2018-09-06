import {Component} from '@angular/core';
import {Todo} from "../../models/todo/todo.model";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  todo: Todo = new Todo();

  constructor(private todoService: TodoService) { }

    // Handles event emitted by TodoListHeaderComponent
    onAddTodo(todo: Todo) {
        this.todoService.addTodo(todo);
    }

    // rename from toggleTodoComplete
    onToggleTodoComplete(todo: Todo) {
        this.todoService.toggleTodoComplete(todo);
    }

    // rename from removeTodo
    onRemoveTodo(todo: Todo) {
        this.todoService.deleteTodoById(todo.id);
    }

    get todos() {
        return this.todoService.getAllTodos();
    }

}
