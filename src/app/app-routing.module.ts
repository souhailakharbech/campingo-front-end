import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscrireComponent } from './inscrire/inscrire.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';
import { FooterComponent } from './AdminComponents/footer/footer.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { ListUsersComponent } from './AdminComponents/list-users/list-users.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { AddcampsiteComponent } from './addcampsite/addcampsite.component';
import { ListComplaintsComponent } from './list-complaints/list-complaints.component';
import { EditProfilUserComponent } from './edit-profil-user/edit-profil-user.component';
import { ProfilClientComponent } from './profil-client/profil-client.component';





const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/acceuil',
    pathMatch: 'full'
  },
  {path :'home' , component:HomeComponent, children:[
    {path :'' , component:AcceuilComponent},
    {path :'inscrire' , component:InscrireComponent},{path:'acceuil',component:AcceuilComponent},
    {path:'login',component:LoginComponent},{path:'profilUser',component:ProfilUserComponent},
   {path : 'edit',component:EditProfilUserComponent},{path:'addCampsite',component:AddcampsiteComponent},
  {path :'client',component:ProfilClientComponent}
   
    
  ]},
 
  {path:'admin',component:DashboardAdminComponent , children:[
    {path :'ListOfUsers', component:ListUsersComponent},{path:'ListClaim',component:ListComplaintsComponent}
  ]}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
