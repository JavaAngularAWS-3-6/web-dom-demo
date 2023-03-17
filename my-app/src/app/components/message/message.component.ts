import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input()
  message:Message = {posted_by:0, message_text:"",time_posted_epoch:0,message_id:0};
  constructor() { }

  ngOnInit(): void {
  }

}
