import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Quiz } from 'src/app/core/models/quiz/quiz.model';
import { QuizService } from 'src/app/core/services/quiz.service';

@Component({
  selector: 'app-quiz-lists',
  templateUrl: './quiz-lists.component.html',
  styleUrls: ['./quiz-lists.component.scss']
})
export class QuizListsComponent implements OnInit {


  data: Quiz[] = [];

  avgScore: number = 0;
  avgDuration: number = 0;

  subscription: Subscription;

  constructor(
    private quizService: QuizService,

  ) { }

  ngOnInit(): void {

    this.subscription = this.quizService.quizes$.subscribe(
      (res) => {
        console.log("🚀 ~ file: quiz-lists.component.ts ~ line 26 ~ QuizListsComponent ~ ngOnInit ~ res", res)
        this.data = res;

        let totalScore = 0;
        let totalDur = 0;
        /* find avg score and duration */
        this.data.forEach(q => {
          totalScore += +q.score;
          totalDur += +q.duration
        });

        console.log(totalDur);
        console.log(totalDur / this.data.length);

        this.avgDuration = +(totalDur / this.data.length).toFixed(0);
        this.avgScore = +(totalScore / this.data.length).toFixed(2)

      },
      (err) => {
        console.log(err);
      }
    );

    this.getQuizLists();
  }

  getQuizLists(params = {}) {
    this.quizService.getItems(params).subscribe()
  }




}
