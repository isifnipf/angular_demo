import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructuralDirectivesModule } from './structural-directives/structural-directives.module';

const routes: Routes = [
    {path:'structures', component: StructuralDirectivesModule}
];


@NgModule({
  declarations: [
  ],
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
