import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { LatestDataComponent } from './components/latest-data/latest-data.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'latest', component: LatestDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
