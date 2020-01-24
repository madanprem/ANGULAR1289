import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ColorComponent } from './color/color.component';
import { UserComponent } from './user/user.component';
import { CountryComponent } from './country/country.component';


const routes: Routes = [ { path: '', component: HomeComponent },
{ path: 'colors', component: ColorComponent },
{path: 'users',component:UserComponent},
{path:'countries',component:CountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
