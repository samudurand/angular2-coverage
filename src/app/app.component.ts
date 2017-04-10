import {Component} from '@angular/core';

import '../assets/styles/bootstrap.css';
import '../assets/styles/bootstrap-grid.css';
import '../assets/styles/bootstrap-reboot.css';
import '../assets/styles/main.css';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    status: string;
    version: string;

    constructor() {
        this.status = 'ok';
        this.version = '1.0.0';
    }
}