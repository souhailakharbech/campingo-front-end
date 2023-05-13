import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { LoginComponent } from './login/login.component';
import { UserServiceService } from './Services/user-service.service';
import { FormsModule } from '@angular/forms';
import { ProfilUserComponent } from './profil-user/profil-user.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { AddComplaintComponent } from './add-complaint/add-complaint.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { UniversalAppInterceptorService } from './Services/universal-app-interceptor.service';
import { ListUsersComponent } from './AdminComponents/list-users/list-users.component';
import { NavBarComponent } from './AdminComponents/nav-bar/nav-bar.component';
import { SideBarComponent } from './AdminComponents/side-bar/side-bar.component';
import { EditProfilUserComponent } from './edit-profil-user/edit-profil-user.component';
import { AddcampsiteComponent } from './addcampsite/addcampsite.component';
import { ListComplaintsComponent } from './list-complaints/list-complaints.component';
import { ProfilClientComponent } from './profil-client/profil-client.component';


@NgModule({
  declarations: [
    AppComponent,
   
    HeaderComponent,
    HomeComponent,
    FooterComponent, InscrireComponent, LoginComponent, ProfilUserComponent, DashboardAdminComponent, AddComplaintComponent, AcceuilComponent, ListUsersComponent, NavBarComponent, SideBarComponent, EditProfilUserComponent, AddcampsiteComponent, ListComplaintsComponent, ProfilClientComponent
     
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule
  ],
  providers: [UserServiceService,
  {provide: HTTP_INTERCEPTORS,
  useClass: UniversalAppInterceptorService,
  multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
