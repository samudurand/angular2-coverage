import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';
import {appConfig} from './config/app.values';

@NgModule({
    imports: [NgbModule.forRoot(), BrowserModule, HttpModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}