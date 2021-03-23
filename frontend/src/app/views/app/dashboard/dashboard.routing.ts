import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { QuizListsComponent } from './quiz-lists/quiz-lists.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', component: AnalyticsComponent },
      { path: 'quiz', component: QuizFormComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
