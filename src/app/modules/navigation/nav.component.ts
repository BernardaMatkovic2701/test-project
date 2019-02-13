import {Component} from '@angular/core';

@Component({
    selector: 'nav-component',
    templateUrl: 'nav.template.html',
    styleUrls: ['nav.scss']
})

export class NavComponent {

    isActive = false;
    innerWidth: any;

    constructor() {
    }

    toggleNavigation(): void {

        this.innerWidth = window.innerWidth;

        if (this.innerWidth < 768) {
            this.isActive = !this.isActive;
        }
    }
}