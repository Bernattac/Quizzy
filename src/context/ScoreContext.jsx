import { createContext, useState, useEffect } from 'react';

const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  // Inicialitzar el marcador amb dades del Local Storage o valors per defecte
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem('score');
    return savedScore ? JSON.parse(savedScore) : { correct: 0, incorrect: 0 };
  });

  // Si canvia, es guarda el comptador
  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(score));
  }, [score]);

  const incrementCorrect = () => {
    setScore((prevScore) => ({
      ...prevScore,
      correct: prevScore.correct + 1
    }));
  };

  const incrementIncorrect = () => {
    setScore((prevScore) => ({
      ...prevScore,
      incorrect: prevScore.incorrect + 1
    }));
  };

  const resetScore = () => {
    setScore({ correct: 0, incorrect: 0 });
  };

  return (
    <ScoreContext.Provider
      value={{ score, incrementCorrect, incrementIncorrect, resetScore }}
    >
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreContext;
