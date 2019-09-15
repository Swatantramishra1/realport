import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
    OnDestroy,
    ChangeDetectorRef,
} from '@angular/core';
import { NewsService } from '../news.service';
import { News } from '../type';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';

const DEBOUNCE_TIME = 1000;

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit, OnDestroy {
    public articles: News[] = [];
    public search: string;

    constructor(private newsService: NewsService, private cdr: ChangeDetectorRef) {}

    @ViewChild('input') inputEl: ElementRef;

    private keyPressSubscription: Subscription;

    value = '';
    showLoader = false;
    srcImage: any;

    ngOnInit() {
        this.fetchArticles();
        this.registerForKeyup();
    }

    ngOnDestroy() {
        this.unsubscribeKeyPress();

        if (this.value === undefined) {
            this.value = '';
        }
    }

    private fetchArticles(search?: string): void {
        this.clearArticle();
        this.newsService.fetchNews(search).subscribe(data => this.setData(data));
    }

    private registerForKeyup() {
        this.keyPressSubscription = fromEvent(this.inputEl.nativeElement, 'input')
            .pipe(
                debounceTime(DEBOUNCE_TIME),
                map((event: any) => event.target.value),
                distinctUntilChanged()
            )
            .subscribe((inputText: string) => {
                this.value = inputText;
                this.clearArticle();
                this.fetchArticles(inputText);
            });
    }

    private unsubscribeKeyPress() {
        if (this.keyPressSubscription) {
            this.keyPressSubscription.unsubscribe();
            this.keyPressSubscription = null;
        }
    }

    private setData(articles: News[]) {
        if (articles.length > 0) {
            this.articles = articles;
        } else {
            this.showLoader = false;
        }

        this.cdr.detectChanges();
    }

    private clear() {
        this.value = '';
        this.fetchArticles();
    }

    private clearArticle() {
        this.articles = [];
        this.showLoader = true;
        this.cdr.detectChanges();
    }
}
