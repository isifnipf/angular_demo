import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { CountriesModule } from './countries/countries.module';
import { HttpClientModule } from '@angular/common/http';
import { StructuralDirectivesModule } from './structural-directives/structural-directives.module';
import { LifecycleModule } from './lifecycle/lifecycle.module';
import { WrapperModule } from './wrapper/wrapper.module';
import { DirectivesModule } from './directives/directives.module';
import { MFormsModule } from './mforms/mforms.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    WrapperModule,
    LifecycleModule,
    StructuralDirectivesModule,
    DirectivesModule,
    BrowserModule,
    ServicesModule,
    CountriesModule,
    HttpClientModule,
    MFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
