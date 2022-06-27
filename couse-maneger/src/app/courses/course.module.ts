import { NgModule } from "@angular/core";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-List.component";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReplacePipe } from '../pipe/replace.pipe';
import { CommonModule } from "@angular/common";
import { starComponent } from './star/star.component';


@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
    ReplacePipe,
    starComponent
    
  ], 
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      }
    ])

  ]
})
export class CourseModule { }