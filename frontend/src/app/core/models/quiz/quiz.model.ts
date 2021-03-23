

export class Quiz {
  _id?: string;
  userId?: string;
  score?: number;
  endedAt?: Date;
  startedAt?: Date;
  CreatedAt?: Date;
  duration?: number;
  attemptedQuestions?: QuizQuestion[];
  isDeleted?: boolean;
}


export class QuizQuestion {
  _id?: string
  questionId?: string;
  isCorrectAnswer?: boolean;
}
