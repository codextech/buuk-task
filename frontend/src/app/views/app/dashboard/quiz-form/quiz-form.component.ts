import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IFormBuilder, IFormGroup } from '@rxweb/types';
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


  // form
  form: FormGroup;
  formBuilder: FormBuilder;


  quizStarted = false;
  constructor(
    private quizService: QuizService,
    formBuilder: FormBuilder
  ) {
    this.formBuilder = formBuilder;

  }


  ngOnInit() {
    this.formInit()
  }


  formInit() {
    this.form = this.formBuilder.group({
      ansers: this.genAnswerArray(),
      quizId: new FormControl(123)
    });
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

    console.log('...........', this.form.value);


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

    return


    this.quizService.startQuiz().subscribe(res => {
      this.quizStarted = false;
      this.questions = res;
    }, err => {
      console.log("🚀 ~ ", err)
    })
  }


  genAnswerArray(): FormArray {
    const roomsArray = new FormArray([]);
    for (let i = 0; i < 4; i++) {
      const answerGroup = new FormGroup({
        answerId: new FormControl('')
      });

      roomsArray.push(answerGroup);
    }
    return roomsArray;
  }

}
