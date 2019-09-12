import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../entreprise.service';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {

  entreprise = []
  constructor(private _entrepriseService: EntrepriseService) { }

  ngOnInit() {

    this. _entrepriseService.getEntreprise()
      .subscribe(
        res => this.entreprise = res,
        err => console.log(err),
      )
  }

}
