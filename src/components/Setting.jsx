import { useContext } from 'react';
import SettingsContext from '../context/SettingsContext';

const Setting = ({ property, text, first, second, third }) => {
  const { settings, updateSetting } = useContext(SettingsContext);

  const options = [first, second, third];

  return (
    <div className="setting">
      <p>{text}</p>
      {options.map((option) => (
        <button
          key={option}
          onClick={(e) => updateSetting(property, e.target.textContent)}
          className={settings[property] === option ? 'btn-selected' : ''}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Setting;
