import { useEffect, useState } from "react";


const TextAnimation = () => {
    const texts = ['Edit PDFs Online for Free', 'Streamline Your Documents', 'Likho Assistant Chatbot', 'Powerful Writer-Powerful Words'];
    const [currentText, setCurrentText] = useState(0);
    const [displayedText, setDisplayedText] = useState('');




    useEffect(() => {
        const interval = setInterval(() => {
          if (displayedText === texts[currentText]) {
            setCurrentText((prevText) => (prevText + 1) % texts.length);
            setDisplayedText('');
          } else {
            const nextCharacter = texts[currentText][displayedText.length];
            setDisplayedText((prevText) => prevText + nextCharacter);
          }
        }, 200);
    
        return () => {
          clearInterval(interval);
        };
      }, [currentText, displayedText, texts]);
    
      return (
        <div>
          <h1 className="pt-3 pb-5 text-base">
            . <span className="typing-animation font-semibold text-gray-300 text-5xl">{displayedText}</span>
          </h1>
        </div>
      );
    };
    
    export default TextAnimation;