import { ArchiveComponent } from './archive/archive.component';
import { AddComponent } from './add/add.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'add', component:AddComponent},
  {path:'archive', component:ArchiveComponent},
  {path:'add/:id', component:AddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
