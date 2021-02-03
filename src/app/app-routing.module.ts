import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '@app/components/home/home.component';
import {ContactListComponent} from '@app/components/contact-list/contact-list.component';
import {ContactComponent} from '@app/components/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contactList', component: ContactListComponent },
  { path: 'contact/:id', component: ContactComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
