import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  tickets : Ticket[] = [];
  constructor(private ticketService : TicketService) { }

  ngOnInit(): void {
    this.refresh();
  }
  refresh() : void{
    this.ticketService.getUnresolvedTickets().subscribe(json => this.tickets=json);
  }

}
