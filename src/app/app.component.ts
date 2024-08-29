import { Component } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, DragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
// import { RouteConfigLoadEnd } from '@angular/router';
// import { Router } from 'express';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[CdkDropList,CdkDrag,CdkDropListGroup,FormsModule],
  standalone:true,
})
export class AppComponent {
  newTask: string = '';
  todo: string[] = [];
  done: string[] = [];

  addTask() {
    if (this.newTask.trim()) {
      this.todo.push(this.newTask.trim());
      this.newTask = '';
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  trackByFn(index: number, item: any): number {
    return index;
  }
}
