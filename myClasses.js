class Question {
  constructor(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}
const myQuestions = [
  {
    question: "Oliko tehtävä mukava?",
    answers: {
      a: "Kyllä",
      b: "Ehdottomasti",
      c: "Ei XD",
    },
    correctAnswer: "c",
  },
  {
    question: "Juotko olutta?",
    answers: {
      a: "Siiderimies",
      b: "Absolutisti",
      c: "Vaikka heti!",
    },
    correctAnswer: "c",
  },
  {
    question: "Mikä seuraavista ei ole ankka",
    answers: {
      a: "Iines",
      b: "Aku",
      c: "Roope",
      d: "Hessu",
    },
    correctAnswer: "d",
  },
];
