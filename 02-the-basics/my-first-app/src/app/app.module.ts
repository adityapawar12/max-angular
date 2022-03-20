// App/root module of the project.
// Needed imports/dependencies.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// modules imports.
import { AppRoutingModule } from './app-routing.module';

// components imports.
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';

// The decorator used to create a module.
@NgModule({
  // Declaring components to use in this module.
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DatabindingComponent,
    DirectivesComponent,
  ],

  // Other modules that we need in this module.
  imports: [BrowserModule, AppRoutingModule, FormsModule],

  // Used for services.
  providers: [],

  // The component that is loaded first/root component.
  bootstrap: [AppComponent],
})

// exporting module.
export class AppModule {}
