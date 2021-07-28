import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleIndexComponent } from './people-index/people-index.component';

const routes: Routes = [
  {
    path: '',
    component: PeopleIndexComponent,
    data: { title: 'Active People' },
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule { }
