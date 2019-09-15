import { Component, Input } from '@angular/core';
import { News } from 'src/app/type';

@Component({
    selector: 'app-news-card',
    template: `
        <mat-card class="news-card">
            <mat-card-header>
                <mat-card-title>{{ article?.title }}</mat-card-title>
                <mat-card-subtitle>Dog Breed</mat-card-subtitle>
            </mat-card-header>
            <img
                mat-card-image
                src="{{ article?.urlToImage }}"
                onerror="this.src='https://cdn.shopify.com/s/files/1/1614/0411/t/37/assets/icon-no-image.svg?22936'"
                alt="{{ article?.title }}"
            />
            <mat-card-content>
                <p>
                    {{ article?.description }}
                </p>
            </mat-card-content>
            <mat-card-actions>
                <button mat-button>Read More</button>
            </mat-card-actions>
        </mat-card>
    `,
    styleUrls: ['./../../news.component.scss'],
})
export class NewsCardComponent {
    @Input() article: News;
}
