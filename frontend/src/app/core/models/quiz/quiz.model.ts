

export class Quiz {
  _id?: string;
  userId?: string;
  score?: number;
  endedAt?: Date;
  startedAt?: Date;
  CreatedAt?: Date;
  attemptedQuestions?: QuizQuestion[];
  isDeleted?: boolean;
}


export class QuizQuestion {
  _id?: string
  questionId?: string;
  isCorrectAnswer?: boolean;
}
