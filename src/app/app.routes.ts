import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from "./pages/profile/profile.component";
import { PatientsComponent } from "./pages/patients/patients.component";
import { NotificationComponent } from "./pages/notification/notification.component";
import { RechercheComponent } from "./pages/recherche/recherche.component";
import { SoinsComponent } from "./pages/soins/soins.component";
import { LoginPageComponent } from "./pages/login/login.component";
import { provideHttpClient } from '@angular/common/http';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent }, 
  { path: 'Profile', component: ProfileComponent },
  { path: 'Patients', component: PatientsComponent },
  { path: 'Notification', component: NotificationComponent },
  { path: 'Recherche', component: RechercheComponent },
  { path: 'Soins', component: SoinsComponent },
  { path: '**', redirectTo: '' }, 
];

@NgModule({
  providers: [provideHttpClient()],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
