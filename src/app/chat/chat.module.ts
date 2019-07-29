import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChatDialogComponent],
  imports: [
    CommonModule,
    FormsModule    
  ],
  exports: [ChatDialogComponent]
})
export class ChatModule { }
