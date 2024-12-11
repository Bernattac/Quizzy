import { useContext } from 'react';
import ScoreContext from '../context/ScoreContext';

const ScoreBoard = () => {
  const { score, resetScore } = useContext(ScoreContext);

  return (
    <div className="score-board">
      <h3>Statistics</h3>
      <p>✅ {score.correct}</p>
      <p>❌ {score.incorrect}</p>
      <button onClick={resetScore}>Reset Counter</button>
    </div>
  );
};

export default ScoreBoard;
