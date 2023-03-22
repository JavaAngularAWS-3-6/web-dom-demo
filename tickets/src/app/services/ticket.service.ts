import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http : HttpClient) { }

  submitTicket(ticket : Ticket):Observable<Ticket>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<Ticket>("http://127.0.0.1:9000/ticket", ticket, {headers:header});
  }
  getUnresolvedTickets():Observable<Ticket[]>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get<Ticket[]>("http://127.0.0.1:9000/ticket?resolved=false", {headers:header});
  }
  resolveTicket(id : number):Observable<Ticket>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.patch<Ticket>(`http://127.0.0.1:9000/ticket/${id}`, {resolved:true}, {headers:header});
  }
  
}
