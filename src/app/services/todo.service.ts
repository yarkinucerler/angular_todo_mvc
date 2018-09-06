import { Injectable } from '@angular/core';

import {Todo} from "../models/todo/todo.model";

@Injectable()
export class TodoService {

    // Placeholder for last id so we can simulate
    // automatic incrementing of ids
    lastId: number = 0;

    // Placeholder for todos
    todos: Todo[] = [];

    constructor() {
    }

    // Simulate POST /todos
    addTodo(todo: Todo): TodoService {
        if (!todo.id) {
            todo.id = ++this.lastId;
        }
        this.todos.push(todo);
        return this;
    }

    // Simulate DELETE /todos/:id
    deleteTodoById(id: number): TodoService {
        this.todos = this.todos
            .filter(todo => todo.id !== id);
        return this;
    }

    // Simulate PUT /todos/:id
    updateTodoById(id: number, values: Object = {}): Todo {
        let todo = this.getTodoById(id);
        if (!todo) {
            return null;
        }
        Object.assign(todo, values);
        return todo;
    }

    // Simulate GET /todos
    getAllTodos(): Todo[] {
        return this.todos;
    }

    // Simulate GET /todos/:id
    getTodoById(id: number): Todo {
        return this.todos
            .filter(todo => todo.id === id)
            .pop();
    }

    // Toggle todo completed
    toggleTodoComplete(todo: Todo){
        let updatedTodo = this.updateTodoById(todo.id, {
            completed: !todo.completed
        });
        return updatedTodo;
    }

}