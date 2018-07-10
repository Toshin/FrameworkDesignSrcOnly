import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
 
// import alert service and component
import { AlertComponent } from './_directives/index';
import { AlertService } from './_services/index';
 
import { HomeComponent } from './home/index';
 
@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
 
        // include alert directive component in app module declarations
        AlertComponent,
 
        HomeComponent
    ],
    providers: [
        // include alert service in app module providers
        AlertService
    ],
    bootstrap: [AppComponent]
})
 
export class AppModule { }