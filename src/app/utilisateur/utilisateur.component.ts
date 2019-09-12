import { Router } from '@angular/router';
import { UtilisateurService } from './../utilisateur.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  imageUrl : string = "/assets/img/gre.jpg";
  fileToUpload : File = null;
  constructor(private imageService: UtilisateurService,private router:Router) { }



  ngOnInit() {
  }

  handleFileInput(file: FileList){
    this.fileToUpload = file.item(0);

      //Show image preview
      var reader = new FileReader();
      reader.onload = (event:any) => {
        this.imageUrl = event.target.result;
      }
      reader.readAsDataURL(this.fileToUpload);
  }
  OnSubmit(username, Nom, Email, RaisonSociale, Ninea, Adresse, Solde, password, imageFile){
    this.imageService.postFile(
      username.value,
      Nom.value,
      Email.value,
      RaisonSociale.value,
      Ninea.value,
      Adresse.value,
      Solde.value,
      this.fileToUpload,
      password.value
).subscribe( data =>{
        console.log('data');
        username.value = null;
        Email.value = null;
        Email.value = null;
        RaisonSociale.value = null;
        Ninea.value = null;
        Adresse.value = null;
        Solde.value = null;
        imageFile.value = null;
        password.value = null;
        this.imageUrl = "/assets/img/gre.jpg";
      }
    );
   }
}
