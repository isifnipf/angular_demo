import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { SwitchComponent } from './switch/switch.component';



@NgModule({
  declarations: [
    ForLoopComponent,
    SwitchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ForLoopComponent,
    SwitchComponent
  ]
})
export class StructuralDirectivesModule { }
