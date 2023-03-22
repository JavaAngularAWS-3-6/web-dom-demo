import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentComponent } from './pages/agent/agent.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {path:"user", component:UserComponent},
  {path:"agent", component:AgentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
