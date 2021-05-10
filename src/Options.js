import Option from "./Option";
import "./Options.css";
function Options({
  options,
  countries,
  correct,
  handleClick,
  showAnswers,
  isDisabled,
}) {
  console.log(options);

  return (
    <div className="Options">
      {options.map((option) => {
        return (
          <Option
            isDisabled={isDisabled}
            showAnswers={showAnswers}
            id={option}
            country={countries[option].name}
            key={countries[option].numericCode}
            isCorrect={correct === option}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}

export default Options;
