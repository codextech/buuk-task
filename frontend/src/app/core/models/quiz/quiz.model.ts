

export class Quiz {
  _id: string;
  userId: string;
  score: number;
  attemptedQuestions?: QuizQuestion[];
  isDeleted?: boolean;
}


export class QuizQuestion {
  _id: string
  questionId?: string;
  isCorrectAnswer?: string;
}
