import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/core/models/question/question.model';
import { Quiz, QuizQuestion } from 'src/app/core/models/quiz/quiz.model';
import { QuizService } from 'src/app/core/services/quiz.service';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {

  questions: Question[] = [];

  answertaken: QuizQuestion[] = [];


  quizStarted = false;
  constructor(
    private quizService: QuizService
  ) { }

  ngOnInit(): void {
  }


  startQuiz() {
    this.quizService.startQuiz().subscribe(res => {
      this.quizStarted = true;
      this.questions = res;
    }, err => {
      console.log("🚀 ~ ", err)
    })
  }


  onClickAnswer(questionId, answerId) {

    const isAnsweredCorrect = this.questions.find(questionId).answers.find(answerId).isRightAnswer
    const alreadyAnsweredQuestion = this.answertaken.find(questionId);
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

    this.quizService.startQuiz().subscribe(res => {
      this.quizStarted = false;
      this.questions = res;
    }, err => {
      console.log("🚀 ~ ", err)
    })
  }

}
