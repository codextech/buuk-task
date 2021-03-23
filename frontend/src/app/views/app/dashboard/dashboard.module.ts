import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ComponentsCardsModule } from 'src/app/components/cards/components.cards.module';
import { DashboardsContainersModule } from 'src/app/containers/dashboards/dashboards.containers.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard.routing';
import { AnalyticsComponent } from './analytics/analytics.component';
import { QuizListsComponent } from './quiz-lists/quiz-lists.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { FormsModule as FormsModuleAngular, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    LayoutContainersModule,
    DashboardsContainersModule,
    DashboardRoutingModule,
    ComponentsCardsModule,
    CommonModule,
    FormsModuleAngular,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    AnalyticsComponent,
    QuizListsComponent,
    QuizFormComponent
  ]
})
export class DashboardModule { }
