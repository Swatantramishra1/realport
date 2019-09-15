import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-news-empty-card',
    template: `
        <mat-card class="news-card">
            <img mat-card-image src="/assets/images/placeholder.jpg" alt="Empty Results" />
            <mat-card-content>
                <p>
                    Please search other than <strong> {{ searchTerm }} </strong>
                </p>
            </mat-card-content>
        </mat-card>
    `,
    styleUrls: ['./../../news.component.scss'],
})
export class NewsEmptyCardComponent {
    @Input() searchTerm: string;
}
