import { NgModule } from '@angular/core';
import { PeopleIndexComponent } from './people-index/people-index.component';
import { SharedModule } from 'src/app/shared.module';
import { PeopleRoutingModule } from './people-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PeopleIndexComponent],
  imports: [
    SharedModule, PeopleRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class PeopleModule { }
