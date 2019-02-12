import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {MainComponent} from './modules/main/main.component';
import {NavComponent} from './modules/navigation/nav.component';
import {HomePageComponent} from './modules/home-page/home-page.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        NavComponent,
        HomePageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}