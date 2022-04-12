import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumeParamsComponent } from './consume-params/consume-params.component';
import { ChildbComponent } from './parentb/childb/childb.component';
import { ParentbComponent } from './parentb/parentb.component';

const routes: Routes = [
  { path: 'parentb', component: ParentbComponent,
  children:[
    { path: 'childb', component: ChildbComponent}
  ] 
  },
  { path: 'consume-params/:id', component: ConsumeParamsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
