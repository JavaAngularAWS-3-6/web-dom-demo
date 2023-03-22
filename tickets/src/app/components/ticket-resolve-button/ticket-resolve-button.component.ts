import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';


@Component({
  selector: 'app-ticket-resolve-button',
  templateUrl: './ticket-resolve-button.component.html',
  styleUrls: ['./ticket-resolve-button.component.css']
})
export class TicketResolveButtonComponent implements OnInit {
  @Input()
  ticket: Ticket = {};
  @Output()
  refreshEvent : EventEmitter<any> = new EventEmitter<any>();
  constructor(private ticketService : TicketService) { }

  ngOnInit(): void {
  }

  resolve() : void {
    this.ticketService.resolveTicket(this.idAsNumber(this.ticket.id)).subscribe(json => this.refreshEvent.emit())
  }
  /**
   * type guard - allows us to guarantee that a variable is definitely of a certain type
   */
  idAsNumber(id : number | undefined) : number {
    return id as number;
  }

}
