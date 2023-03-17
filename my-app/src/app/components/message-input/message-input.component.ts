import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {
  input:string = "";

  postMessage():void{
      let newMessage : Message = {message_id: 0, message_text: this.input, time_posted_epoch: 0, posted_by: 0}
      console.log(newMessage);
      this.messageService.postMessage(newMessage);
  }

  constructor(private messageService : MessagesService) { }

  ngOnInit(): void {
  } 

}
