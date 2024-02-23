import { Component } from "@angular/core";

@Component({
    selector:"todo",
    templateUrl:"./to.component.html",
    styleUrl:"./todo.component.css"
})

export class todoComponent{
todos:string[]=[];
newTodo:string=''


addTodo() {
    if (this.newTodo) {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    }
  }
  deleteTodo(index: number) {
    this.todos.splice(index,  1);
  }

  editTodo(index: number) {
    this.newTodo = this.todos[index];
    this.deleteTodo(index);
  }

}