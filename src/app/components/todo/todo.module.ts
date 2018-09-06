import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TodoListComponent,
    TodoListItemComponent,
    TodoListHeaderComponent,
    TodoListFooterComponent
  ],
  exports: [
    TodoListComponent,
    TodoListItemComponent,
    TodoListHeaderComponent,
    TodoListFooterComponent
  ]
})
export class TodoModule { }
