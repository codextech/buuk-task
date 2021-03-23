import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Question } from '../models/question/question.model';
import { Quiz } from '../models/quiz/quiz.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService extends ApiService<Quiz> {

  constructor(http: HttpClient) {
    super('quizes', http);
  }




  private readonly _quiz = new BehaviorSubject<Quiz[]>([]);
  // Expose the observable$ part of the _company subject (read only stream)
  readonly quizes$ = this._quiz.asObservable();

  // ********************* getter *********************
  // the getter will return the last value emitted in _company subject
  public get quizes(): Quiz[] {
    return this._quiz.getValue();
  }

  // ********************* setter *********************
  // assigning a value to this._user will push it onto the observable
  // and down to all of its subsribers (ex: this._user = [])
  private set setQuizes(val: Quiz[]) {
    this._quiz.next(val);
  }


  getItems(params = {}) {
    return super.get('', params).pipe(
      map((res) => {
        let data: Quiz[] = res.data;
        return data;
      }),
      tap(data => {
        this.setQuizes = [...data];
      })
    );
  }




  startQuiz() {
    return super.post('', {}, {}).pipe(
      map((res: any) => {

        return (res.data as { quizId: string, questions: Question[] });
      })
    );
  }

  submitQuiz(model: Quiz, id?: any, options?: any) {
    return super.put(`submit/${id}`, model).pipe(
      map((res: any) => {
        return (res.data as Quiz);
      }),
      tap(data => {
        this.setQuizes = [...this.quizes, data];
      })
    );
  }


}
