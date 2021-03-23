import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IFormBuilder, IFormGroup } from '@rxweb/types';
import { Question } from 'src/app/core/models/question/question.model';
import { Quiz, QuizQuestion } from 'src/app/core/models/quiz/quiz.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { QuizService } from 'src/app/core/services/quiz.service';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {

  questions: Question[] = [];


  options: any = [];
  option: any = [];

  answertaken: QuizQuestion[] = [];

  currentQuizId: string;

  quizStarted = false;
  constructor(
    private quizService: QuizService,
    private router: Router,
    private alertService: AlertService,
  ) {

  }


  ngOnInit() {
  }



  startQuiz() {
    this.quizService.startQuiz().subscribe(res => {
      this.quizStarted = true;
      this.questions = res.questions;
      this.currentQuizId = res.quizId
    }, err => {
      console.log("🚀 ~ ", err)
    })
  }


  onClickAnswer(questionId, answerId) {
    console.log("🚀 ~ file: quiz-form.component.ts ~ line 38 ~ QuizFormComponent ~ onClickAnswer ~ answerId", answerId)
    console.log("🚀 ~ file: quiz-form.component.ts ~ line 38 ~ QuizFormComponent ~ onClickAnswer ~ questionId", questionId)

    const ques = (this.questions.find(q => q._id == questionId))
    const isAnsweredCorrect = (ques.answers.find(a => a._id == answerId)).isRightAnswer
    const alreadyAnsweredQuestion = this.answertaken.find(a => a.questionId == questionId);
    if (alreadyAnsweredQuestion) {
      /* update answer  */
      alreadyAnsweredQuestion.isCorrectAnswer = isAnsweredCorrect;
    } else {
      /* add answer */
      this.answertaken.push({
        questionId: questionId,
        isCorrectAnswer: isAnsweredCorrect
      })
    }

  }


  submitQuiz() {



    let body: Quiz = {
      attemptedQuestions: this.answertaken,
      score: 0
    }

    /* calculate score and  submit record*/

    body.attemptedQuestions.forEach(a => {
      if (a.isCorrectAnswer)
        body.score++;
    })
    console.log(body);


    this.quizService.submitQuiz(body, this.currentQuizId).subscribe(res => {
      this.quizStarted = false;
      this.alertService.addSuccess('Quiz Submitted', '');
      this.router.navigate(['/']);
    }, err => {
      console.log("🚀 ~ ", err)
    })
  }


}
