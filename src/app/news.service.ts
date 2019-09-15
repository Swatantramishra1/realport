import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { NewsApiService, TopHeadlinesResponse } from 'angular-news-api';
import { News } from './type';

@Injectable({
    providedIn: 'root',
})
export class NewsService {
    constructor(private newsApiService: NewsApiService) {}

    fetchNews(searchString: string): Observable<News[]> {
        return this.newsApiService
            .everything({
                q: searchString || 'us',
            })
            .pipe(map(res => this.getNewsData(res)));
    }

    private getNewsData(res: TopHeadlinesResponse): News[] {
        if (res.status === 'ok') {
            return res.articles;
        } else {
            // [TODO]: Show Errors
            return null;
        }
    }
}
