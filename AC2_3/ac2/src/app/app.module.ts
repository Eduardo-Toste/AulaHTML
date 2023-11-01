// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [TaskListComponent], // Adicione o componente às declarações
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
