import { useState, useMemo, useContext } from 'react';
import ScoreContext from '../context/ScoreContext';

const Question = ({
  category,
  type,
  difficulty,
  question,
  correctAnswer,
  incorrectAnswers
}) => {
  const { incrementCorrect, incrementIncorrect } = useContext(ScoreContext);

  const answers = useMemo(() => {
    const allAnswers = [correctAnswer, ...incorrectAnswers];
    return allAnswers.sort(() => Math.random() - 0.5);
  }, [correctAnswer, incorrectAnswers]);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [feedbackClass, setFeedbackClass] = useState('');

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    const isCorrect = answer === correctAnswer;
    setFeedback(isCorrect ? 'Correct!' : 'Incorrect!');
    setFeedbackClass(isCorrect ? 'feedback-correct' : 'feedback-incorrect');
    isCorrect ? incrementCorrect() : incrementIncorrect();
  };

  const sanitize = (text) =>
    text
      .replaceAll('&quot;', '"')
      .replaceAll('&#039;', "'")
      .replaceAll('&amp;', '&')
      .replaceAll('&deg;', 'º')
      .replaceAll('&shy;', '\u00AD');

  return (
    <div>
      <div className="card">
        <h2>{category}</h2>
        <p className={`difficulty difficulty-${difficulty.toLowerCase()}`}>
          {difficulty}
        </p>
        <p className="question">{sanitize(question)}</p>
        {answers.map((answer) => (
          <p
            key={answer}
            className={`answer ${
              selectedAnswer === answer
                ? answer === correctAnswer
                  ? 'selected-correct'
                  : 'selected-incorrect'
                : ''
            }`}
            onClick={() => handleAnswerClick(answer)}
            style={{
              cursor: selectedAnswer ? 'default' : 'pointer',
              pointerEvents: selectedAnswer ? 'none' : 'auto'
            }}
          >
            {sanitize(answer)}
          </p>
        ))}
        {feedback && (
          <div className={`feedback-section ${feedbackClass}`}>
            <p className="feedback">{feedback}</p>
            {feedback === 'Incorrect!' && (
              <p className="explanation">
                The correct answer is: {sanitize(correctAnswer)}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
