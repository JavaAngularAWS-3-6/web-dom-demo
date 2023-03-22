import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  description:string = "";
  type:string = "";
  constructor(private ticketService : TicketService) { }

  ngOnInit(): void {
  }
  submit() : void{
    let ticket : Ticket = {description:this.description,
    type:this.type, resolved:false};
    this.ticketService.submitTicket(ticket).subscribe();
  }

}
