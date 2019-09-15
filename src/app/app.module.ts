import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
} from '@angular/material';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgnewsModule } from 'angular-news-api';
import { NewsApiKeyConfig } from 'angular-news-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsComponent } from './news/news.component';
import { newsComponents } from './news/components';

const newsApiKey = 'b13b616a102543068cbe2f9d1ac175ed';

const newsApiConfig: NewsApiKeyConfig = {
    key: newsApiKey,
};

@NgModule({
    declarations: [AppComponent, NewsDetailComponent, NewsComponent, ...newsComponents],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatCardModule,
        MatGridListModule,
        MatListModule,
        NgnewsModule.forRoot(newsApiConfig),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
