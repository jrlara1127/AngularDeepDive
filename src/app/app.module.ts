import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {CourseTitleComponent} from './course-title/course-title.component';
import { CoursesModule } from './courses/courses.module';

@NgModule({
    declarations: [
        AppComponent,
        CourseTitleComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CoursesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
