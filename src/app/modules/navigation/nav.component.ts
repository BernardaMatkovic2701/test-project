import {Component} from '@angular/core';

@Component({
    selector: 'nav-component',
    templateUrl: 'nav.template.html',
    styleUrls: ['nav.scss']
})

export class NavComponent {

    isActive = false;

    constructor() {
    }

    toggleNavigation(): void {
        this.isActive = !this.isActive;
    }
}