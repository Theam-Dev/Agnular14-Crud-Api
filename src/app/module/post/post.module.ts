import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IndexComponent } from '../../view/post/index/index.component';
import { CreateComponent } from '../../view/post/create/create.component';
import { EditComponent } from '../../view/post/edit/edit.component';

@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PostModule { }
