import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
public images: any[] = [];
    constructor() {
        this.images = [
            {path: '../../../assets/img/pilotes/famillebeauf.jpg'},
            {path: '../../../assets/img/pilotes/mathiasbeauf.jpg'},
            {path: '../../../assets/img/pilotes/gregbeauf.jpg'},
            {path: '../../../assets/img/pilotes/sibibeauf.jpg'},
            {path: '../../../assets/img/pilotes/cedrickbeauf.jpg'},
            {path: '../../../assets/img/pilotes/benbeauf.jpg'},
            {path: '../../../assets/img/pilotes/vladbeauf.jpg'},
            {path: '../../../assets/img/pilotes/monteirobeauf.jpg'}
        ];
    }
}
