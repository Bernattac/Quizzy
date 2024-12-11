import { useContext, useEffect, useState } from 'react';
import SettingsContext from '../context/SettingsContext';
import Question from './Question';

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const { settings } = useContext(SettingsContext);

  const apiUrl = 'https://opentdb.com/api.php?type=multiple';

  useEffect(() => {
    const fetchData = async () => {
      const filterNumber = '&amount=' + settings.number;

      // Mapeig de categories a id de l'API
      const categoryMap = {
        Sports: 21,
        Geography: 22,
        History: 23
      };

      // Obtenir el valor correcte de la categoria
      const filterCategory =
        '&category=' + (categoryMap[settings.category] || '');

      const filterDifficulty =
        '&difficulty=' + settings.difficulty.toLowerCase();

      const response = await fetch(
        `${apiUrl}${filterNumber}${filterCategory}${filterDifficulty}`
      );
      const data = await response.json();
      setQuestions(data.results);
    };

    fetchData();
  }, [settings]);

  return (
    <div className="bg-quiz">
      <div className="container questions">
        {questions.map((question, index) => (
          <Question
            key={index}
            category={question.category}
            type={question.type}
            difficulty={question.difficulty}
            question={question.question}
            correctAnswer={question.correct_answer}
            incorrectAnswers={question.incorrect_answers}
          />
        ))}
      </div>
    </div>
  );
};

export default Questions;
