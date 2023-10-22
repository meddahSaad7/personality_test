// Questionnaire.js
import React, { useState } from "react";
import { AiFillCloseCircle } from 'react-icons/ai'
import Flashcard from "./components/FlashCard";
const App = () => {
  const [checkboxes, setCheckboxes] = useState([]);
  const [showResult, setShowResult] = useState(false)
  const options = [
    "whene you are in free time, are you able to controle your thinking ?",
    "are you have a goals in your life ?", 
    "Can you speak up in front of a large audience?",
    "if you have goals, are they helped others?", 
    "Would you consider taking on a leadership role in a group project?",
    "if you don't have goals, are you love to helped others?", 
    "Are you comfortable confronting someone when they've wronged you?",
    "are you able to open a new page with any person brok your heard ?",
    "Could you easily ask for a promotion at work?",
    "if you have a lot of money, are you work ?", 
    "Would you participate in a debate or argument to defend your viewpoint?",
    "are you belive with yourself to do any thing you thought about it ?", 
    "Do you often express your own opinions, even if they differ from the majority?",
    "if you born in america, are you be muslim ?", 
    "if other peoples tell about one thing that it's false but you see that thins is true, are able to say that ?", 
    "Are you inclined to challenge authority when you believe it's necessary?",
    "do you learn always even one thing per day ?",
    "Would you be open to making significant changes in your life or career?",
    "if passed one day or tow without learning anything, do you fel with nigative emotions about that ?",
    "Could you say no to a request that you're not comfortable with?",
    "are you do sport ?",
    "Can you ask for help or support when you need it?",
    "if one persont tell you a nigative words, your emosions never chnaged ?",
    "Would you feel confident negotiating a deal or salary with others?",
    "Are you willing to take calculated risks to achieve your goals?",
    "Do you feel you can establish personal boundaries and stick to them?"
  ];

  const handleCheckboxChange = (option) => {
    if (checkboxes.includes(option)) {
      setCheckboxes(checkboxes.filter((item) => item !== option));
    } else {
      setCheckboxes([...checkboxes, option]);
    }
  };

  const isSuccess = checkboxes.length > options.length / 2;
  const persontage = (checkboxes.length / options.length)*100;
  const [status, setStatus] = useState('Questionnaire')
  return (
    <div className=" w-full h-full flex justify-center items-center flex-col relative">
      <h2>Questionnaire</h2>
      <p className=" mb-5">Select at least half of the options to succeed.</p>
      <div className=" w-full h-[50px] mb-5 flex ">
        <button className=" flex-1 bg-green-400 text-white flex justify-center items-center" onClick={()=>setStatus('Questionnaire')}>
        Questionnaire
        </button>
        <button className=" flex-1 bg-red-400 text-white flex justify-center items-center" onClick={()=>setStatus('flashCard')}>
        FlashCard
        </button>
      </div>
      
      {
        status==="flashCard"?<Flashcard/>:<>
        <ul>
        {options.map((option, index) => (
          <li key={index}>
            <label htmlFor={`input-${index}`} className=" flex justify-start items-center mb-6 ">
              <span className=" flex-[1] mr-3 font-bold flex justify-around items-center">
                <input
                  className=" w-[24px] h-[24px]"
                  type="checkbox"
                  checked={!checkboxes.includes(option)}
                  disabled
                />
                <input
                  className=" w-[24px] h-[24px]"
                  id={`input-${index}`}
                  type="checkbox"
                  checked={checkboxes.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                />
              </span>
              
              <p className=" flex-[5] text-[15px]">{option}</p>
            </label>
          </li>
        ))}
      </ul>
      <button className=" w-full h-[50px] flex justify-center border bg-yellow-600 text-white items-center" onClick={()=>setShowResult(true)}>show result</button>

      {
        showResult&&<div className={`fixed flex justify-center items-center text-white rounded-md top-0 left-0 w-full h-full bg-opacity-50 bg-black`}>
          <div className={`${isSuccess ? " bg-green-400" : " bg-red-400"} w-[200px] h-[50px] rounded-md flex justify-center items-center relative`}>
                <span className=" absolute text-black cursor-pointer right-[-10px] top-[-10px] z-10" onClick={()=>setShowResult(false)}>
                <AiFillCloseCircle className=" text-[24px]"/>
              </span>
        {isSuccess ? "Success!" : "Failure!"} {Math.ceil(persontage)} %
            </div>
      </div>
      }
        </>
      }
      
      
    </div>
  );
};

export default App;
