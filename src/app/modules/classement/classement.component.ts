import { compileDeclareClassMetadata } from '@angular/compiler';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-classement',
    templateUrl: './classement.component.html',
    styleUrls: ['./classement.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ClassementComponent {

    dataSource: any[] = [];
    displayedColumns: string[] = ['nom', 'points', 'victoires', 'podium', 'nbEtoiles', 'nbParticipations', 'pointLicence', 'ratioParticipation'];

    constructor() {
        this.dataSource = [
            {
            nom: 'Mathias Dominici',
            picto:'../../../assets/img/pilotes/mat-icon.JPG',
            numero: "23",
            ecurie: 'Haas F1 Team',
            drapeau: '../../../assets/img/flags/israel.JPG',
            points: 1582,
            podium: 47,
            victoires:24,
            nbEtoiles: 12,
            nbParticipations: 15,
            pointLicence: 11
        },
        {
            nom: 'Jordan Sibinski',
            picto:'../../../assets/img/pilotes/sibi-icon.JPG',
            numero: "27",
            ecurie: 'Alfa Romeo Racing ORLEN',
            drapeau: '../../../assets/img/flags/pologne.JPG',
            points: 781,
            podium: 29,
            victoires:6,
            nbEtoiles: 1,
            nbParticipations: 13,
            pointLicence: 10
        },
        {
            nom: 'Ben Bruillon',
            picto:'../../../assets/img/pilotes/ben-icon.JPG',
            numero: "11",
            ecurie: 'McLaren F1 Team',
            drapeau: '../../../assets/img/flags/france.JPG',
            points: 613,
            podium: 17,
            victoires:6,
            nbEtoiles: 0,
            nbParticipations: 14,
            pointLicence: 12
        },
        {
            nom: 'Alex Monteiro',
            picto:'../../../assets/img/pilotes/alex-icon.JPG',
            numero: "9",
            ecurie: 'Aston Martin Cognizant F1 Team',
            drapeau: '../../../assets/img/flags/portugal.JPG',
            points: 451,
            podium: 18,
            victoires:3,
            nbEtoiles: 0,
            nbParticipations: 11,
            pointLicence: 12
        },
        {
            nom: 'Grey Gooze',
            picto:'../../../assets/img/pilotes/greg-icon.JPG',
            numero: "10",
            ecurie: 'Scuderia AlphaTauri Honda',
            drapeau: '../../../assets/img/flags/france.JPG',
            points: 830,
            podium: 20,
            victoires:9,
            nbEtoiles: 0,
            nbParticipations: 16,
            pointLicence: 10
        },
        {
            nom: 'Vlad Boenko',
            picto:'../../../assets/img/pilotes/vlad-icon.JPG',
            numero: "18",
            ecurie: 'Red Bull Racing Honda',
            drapeau: '../../../assets/img/flags/ukraine.JPG',
            points: 373,
            podium: 13,
            victoires:4,
            nbEtoiles: 0,
            nbParticipations: 13,
            pointLicence: 12
        },
        {
            nom: 'Cedrick Guerin',
            picto:'../../../assets/img/pilotes/cedrick-icon.JPG',
            numero: "7",
            ecurie: 'Scuderia Mission Winnow Ferrari',
            drapeau: '../../../assets/img/flags/espagne.JPG',
            points: 785,
            podium: 25,
            victoires:12,
            nbEtoiles: 3,
            nbParticipations: 15,
            pointLicence: 11
        },
    ];

    this.dataSource = this.dataSource.sort((a,b) => {
        return (a.points < b.points ? -1 : 1) * -1;
    })
    }
}
