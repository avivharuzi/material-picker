// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './app.routes';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';

// Services
import { ColorService } from './services/color/color.service';
import { HomeComponent } from './components/home/home.component';
import { SchemaComponent } from './components/schema/schema.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { CopyDirective } from './directives/copy/copy.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SchemaComponent,
    ErrorPageComponent,
    CopyDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RoutingModule,
    RouterModule
  ],
  providers: [
    ColorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
