import Setting from './Setting';

const Settings = () => {
  return (
    <div className="content container">
      <Setting
        property="number"
        text="Number of questions"
        first="6"
        second="12"
        third="18"
      />
      <Setting
        property="category"
        text="Category"
        first="Sports"
        second="Geography"
        third="History"
      />
      <Setting
        property="difficulty"
        text="Difficulty"
        first="Easy"
        second="Medium"
        third="Hard"
      />
    </div>
  );
};

export default Settings;
