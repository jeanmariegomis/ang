import { ListUtilisateurComponent } from './utilisateur/list-utilisateur/list-utilisateur.component';
import { ListEntrepriseComponent } from './entreprise/list-entreprise/list-entreprise.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { AjouterComponent } from './entreprise/ajouter/ajouter.component';
import { AjouterUtilisateurComponent } from './utilisateur/ajouter-utilisateur/ajouter-utilisateur.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
{path: '',redirectTo: '/login',pathMatch: 'full'},
{path: 'login',component: LoginComponent}, 
{path: 'menu', component: MenuComponent},
{path: 'entreprises',component:  ListEntrepriseComponent},
{path: 'entreprise',component: EntrepriseComponent},
{path: 'utilisateur',component: UtilisateurComponent},
{path: 'ajou_entr',component: AjouterComponent},
{path: 'ajou_uti',component: AjouterUtilisateurComponent },
{path: 'list_uti',component: ListUtilisateurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
