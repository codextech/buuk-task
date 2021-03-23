

export class Question {
  _id: string;
  text: string;
  answers: Answer[];
  isDeleted?: boolean;
}


export class Answer {
  _id: string
  text?: string;
  isRightAnswer?: boolean;
}
