import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="parent" [ngClass]="{expanded: panelOpenState}">
            <div class="div1">
                some content
            </div>
            <div class="div2">
                <mat-accordion>
                    <mat-expansion-panel (opened)="panelOpenState = true"
                                         (closed)="panelOpenState = false">
                        <mat-expansion-panel-header>
                            <mat-panel-title>
                                Self aware panel
                            </mat-panel-title>
                            <mat-panel-description>
                                Currently I am {{panelOpenState ? 'open' : 'closed'}}
                            </mat-panel-description>
                        </mat-expansion-panel-header>
                        <ul>
                            <li>some context</li>
                            <li>some context</li>
                            <li>some context</li>
                            <li>some context</li>
                            <li>some context</li>
                            <li>some context</li>
                            <li>some context</li>
                            <li>some context</li>
                            <li>some context</li>
                            <li>some context</li>
                        </ul>
                    </mat-expansion-panel>
                </mat-accordion>
            </div>
            <div class="div3">
                some content
            </div>
        </div>
    `,
    styles: [`
        .parent {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 66px 1fr;
            grid-column-gap: 0;
            grid-row-gap: 0;
            box-sizing: border-box;
        }

        .div1 {
            grid-area: 1 / 1 / 2 / 2;
        }

        .div2 {
            grid-area: 1 / 2 / 2 / 3;
            padding: 8px;
        }

        .div3 {
            grid-area: 2 / 1 / 3 / 3;
        }

        .div1, .div3 {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .parent.expanded .div2 {
            grid-area: 1 / 2 / 3 / 3;
        }

        .parent.expanded .div3 {
            grid-area: 2 / 1 / 3 / 2;
        }

        div {
            border: 1px solid lightgray;
        }
    `]
})
export class AppComponent {
    panelOpenState = false;
}
