import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages:Message[] = [];

  constructor(private messageService : MessagesService) { }

  refresh(){
      this.messageService.getAllMessages().subscribe(json => this.messages = json);
      console.log(this.messages);
  }

  ngOnInit(): void {
  }

}
