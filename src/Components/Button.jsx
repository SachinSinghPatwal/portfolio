/* eslint-disable react/no-unknown-property */
import { useState } from "react";
function Button() {
  const [isClicked, setIsClicked] = useState(false);
  const [hover, setHover] = useState(false);
  const [buttonText, setButtonText] = useState("Projects");
  const letters = "~#$&*()?\\}+><^{";
  let duration;
  function animateText(targetText) {
    let iterations = 0;
    const originalText = buttonText;
    const interval = setInterval(() => {
      if (iterations >= targetText.length) {
        clearInterval(interval);
        setButtonText(targetText);
      } else {
        setButtonText(() =>
          originalText
            .split("")
            .map((letter, index) =>
              index < iterations
                ? targetText[index]
                : letters[Math.floor(Math.random() * letters.length)]
            )
            .join("")
        );
      }
      iterations++;
    }, duration);
  }
  return (
    <label
      className={`bg-transparent w-[125px] h-[42px] py-[.5rem] 
	text-black px-[.3rem] rounded-md  
	items-center justify-items-center font-mono text-[15.6px]  
	${
    isClicked ? "text-[#bc3c93]" : "hover:text-gray-600"
  } hover:w-[129px] hover:h-[42px] hover:pl-[2px] 
	transition-all ease-linear duration-[.2s]  outline-[1.7px] 
	outline-transparent hover:outline-black -outline-offset-[6px] 
	hover:outline-offset-0 hover:text-[17px] `}
      onMouseEnter={() => {
        if (!isClicked) {
          setHover(true);
          duration = 52;
          animateText("Checked", duration);
        }
      }}
      onMouseLeave={() => {
        if (!isClicked) {
          setHover(false);
          duration = 26;
          animateText("Project", duration);
        }
      }}
      onClick={(e) => {
        setIsClicked(true);
        e.currentTarget.children[1].style.text = "#2ea359";
      }}
    >
      <span className="tracking-wider">{buttonText}</span>
    </label>
  );
}

export default Button;
