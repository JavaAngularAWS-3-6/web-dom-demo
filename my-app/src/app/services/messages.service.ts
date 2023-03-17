import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http : HttpClient) { }

  getAllMessages() : Observable<Message[]> {
    return this.http.get<Message[]>("https://641496c8e8fe5a3f3a0ad56a.mockapi.io/api/message");
  }
  postMessage(message: Message) : void {
    this.http.post<Message>("https://641496c8e8fe5a3f3a0ad56a.mockapi.io/api/message", message).subscribe();
  }

}
