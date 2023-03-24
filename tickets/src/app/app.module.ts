import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './pages/user/user.component';
import { AgentComponent } from './pages/agent/agent.component';
import { InputComponent } from './components/input/input.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketResolveButtonComponent } from './components/ticket-resolve-button/ticket-resolve-button.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AgentComponent,
    InputComponent,
    TicketListComponent,
    TicketComponent,
    TicketResolveButtonComponent,
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
