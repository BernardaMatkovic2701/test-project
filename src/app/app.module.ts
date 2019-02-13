import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {MainComponent} from './modules/main/main.component';
import {NavComponent} from './modules/navigation/nav.component';
import {HomePageComponent} from './modules/home-page/home-page.component';
import {FormComponent} from './modules/form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        NavComponent,
        HomePageComponent,
        FormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    exports: [
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}