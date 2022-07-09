import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from 'src/app/view/post/index/index.component';
import { CreateComponent } from 'src/app/view/post/create/create.component';
import { EditComponent } from 'src/app/view/post/edit/edit.component';
const routes: Routes = [
  {path:"",redirectTo:"post",pathMatch:"full"},
  {path:"post",component: IndexComponent},
  {path:"post/create",component: CreateComponent},
  {path:"post/edit/:id",component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
