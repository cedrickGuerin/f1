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
    displayedColumns: string[] = ['nom', 'victoires', 'podium', 'points', 'nbEtoiles', 'nbParticipations', 'pointLicence'];

    constructor() {
        this.dataSource = [
            {
            nom: 'Mathias Dominici',
            picto:'../../../assets/img/pilotes/mat-icon.JPG',
            numero: "23",
            ecurie: 'Haas F1 Team',
            drapeau: '../../../assets/img/flags/israel.JPG',
            points: 0,
            podium: 0,
            victoires:0,
            nbEtoiles: 0,
            nbParticipations: 0,
            pointLicence: 12
        },
        {
            nom: 'Jordan Sibinski',
            picto:'../../../assets/img/pilotes/sibi-icon.JPG',
            numero: "27",
            ecurie: 'Alfa Romeo Racing ORLEN',
            drapeau: '../../../assets/img/flags/pologne.JPG',
            points: 0,
            podium: 0,
            victoires:0,
            nbEtoiles: 0,
            nbParticipations: 0,
            pointLicence: 12
        },
        {
            nom: 'Ben Bruillon',
            picto:'../../../assets/img/pilotes/ben-icon.JPG',
            numero: "11",
            ecurie: 'McLaren F1 Team',
            drapeau: '../../../assets/img/flags/france.JPG',
            points: 0,
            podium: 0,
            victoires:0,
            nbEtoiles: 0,
            nbParticipations: 0,
            pointLicence: 12
        },
        {
            nom: 'Alex Monteiro',
            picto:'../../../assets/img/pilotes/alex-icon.JPG',
            numero: "9",
            ecurie: 'Aston Martin Cognizant F1 Team',
            drapeau: '../../../assets/img/flags/portugal.JPG',
            points: 0,
            podium: 0,
            victoires:0,
            nbEtoiles: 0,
            nbParticipations: 0,
            pointLicence: 12
        },
        {
            nom: 'Grey Gooze',
            picto:'../../../assets/img/pilotes/greg-icon.JPG',
            numero: "10",
            ecurie: 'Scuderia AlphaTauri Honda',
            drapeau: '../../../assets/img/flags/france.JPG',
            points: 0,
            podium: 0,
            victoires:0,
            nbEtoiles: 0,
            nbParticipations: 0,
            pointLicence: 12
        },
        {
            nom: 'Vlad Boenko',
            picto:'../../../assets/img/pilotes/vlad-icon.JPG',
            numero: "18",
            ecurie: 'Red Bull Racing Honda',
            drapeau: '../../../assets/img/flags/ukraine.JPG',
            points: 0,
            podium: 0,
            victoires:0,
            nbEtoiles: 0,
            nbParticipations: 0,
            pointLicence: 12
        },
        {
            nom: 'Cedrick Guerin',
            picto:'../../../assets/img/pilotes/cedrick-icon.JPG',
            numero: "7",
            ecurie: 'Scuderia Mission Winnow Ferrari',
            drapeau: '../../../assets/img/flags/espagne.JPG',
            points: 0,
            podium: 0,
            victoires:0,
            nbEtoiles: 0,
            nbParticipations: 0,
            pointLicence: 12
        },
    ];

    this.dataSource = this.dataSource.sort((a,b) => {
        return (a.points < b.points ? -1 : 1) * -1;
    })
    }
}
