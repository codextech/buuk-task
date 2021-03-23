import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuizService } from 'src/app/core/services/quiz.service';

@Component({
  selector: 'app-quiz-lists',
  templateUrl: './quiz-lists.component.html',
  styleUrls: ['./quiz-lists.component.scss']
})
export class QuizListsComponent implements OnInit {


  data: any[] = [{}];

  subscription: Subscription;

  constructor(
    private quizService: QuizService,

  ) { }

  ngOnInit(): void {

    this.subscription = this.quizService.quizes$.subscribe(
      (res) => {
        console.log("🚀 ~ file: quiz-lists.component.ts ~ line 26 ~ QuizListsComponent ~ ngOnInit ~ res", res)
        this.data = res;
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
