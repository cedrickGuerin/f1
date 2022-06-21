import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-classement',
    templateUrl: './classement.component.html',
    styleUrls: ['./classement.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ClassementComponent {

    dataSource: any[] = [];
    displayedColumns: string[] = ['nom', 'victoires', 'podium', 'points'];

    constructor() {
        this.dataSource = [
            {
            nom: 'Mathias Dominici',
            numero: "23",
            ecurie: 'Haas F1 Team',
            drapeau: '../../../assets/img/flags/israel.JPG',
            points: '0',
            podium: '0',
            victoires:'0'
        },
        {
            nom: 'Jordan Sibinski',
            numero: "27",
            ecurie: 'Alfa Romeo Racing ORLEN',
            drapeau: '../../../assets/img/flags/pologne.JPG',
            points: '0',
            podium: '0',
            victoires:'0'
        },
        {
            nom: 'Ben Bruillon',
            numero: "11",
            ecurie: 'McLaren F1 Team',
            drapeau: '../../../assets/img/flags/france.JPG',
            points: '0',
            podium: '0',
            victoires:'0'
        },
        {
            nom: 'Alex Monteiro',
            numero: "9",
            ecurie: 'Aston Martin Cognizant F1 Team',
            drapeau: '../../../assets/img/flags/portugal.JPG',
            points: '0',
            podium: '0',
            victoires:'0'
        },
        {
            nom: 'Grey Gooze',
            numero: "10",
            ecurie: 'Scuderia AlphaTauri Honda',
            drapeau: '../../../assets/img/flags/france.JPG',
            points: '0',
            podium: '0',
            victoires:'0'
        },
        {
            nom: 'Vlad Boenko',
            numero: "18",
            ecurie: 'Red Bull Racing Honda',
            drapeau: '../../../assets/img/flags/ukraine.JPG',
            points: '0',
            podium: '0',
            victoires:'0'
        },
        {
            nom: 'Cedrick Guerin',
            numero: "7",
            ecurie: 'Scuderia Mission Winnow Ferrari',
            drapeau: '../../../assets/img/flags/espagne.JPG',
            points: '0',
            podium: '0',
            victoires:'0'
        },
    ]
    }
}
