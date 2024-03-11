import React, { useState } from "react";
import "./index.css";

function Question({
  question,
  option1,
  option2,
  option3,
  option4,
  onChange,
  checkedValue,
}) {
  return (
    <div className="question">
      <h4>{question}</h4>
      <label>
        <input
          type="radio"
          name="option"
          value={option1}
          onChange={onChange}
          checked={checkedValue === option1}
        />
        {option1}
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="option"
          value={option2}
          onChange={onChange}
          checked={checkedValue === option2}
        />
        {option2}
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="option"
          value={option3}
          onChange={onChange}
          checked={checkedValue === option3}
        />
        {option3}
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="option"
          value={option4}
          onChange={onChange}
          checked={checkedValue === option4}
        />
        {option4}
      </label>
      <br />
    </div>
  );
}

function Slider() {
  const questions = [
    {
      question: "1)What is Java?",
      option1: "Java is a DBMS",
      option2: "Java is a Tool",
      option3: "Java is a Web Browser",
      option4: "Java is a programming language",
      answer: "Java is a programming language",
    },
    // Add more questions here
    {
      question: "2)What is the correct way to write a comment in Java?",
      option1: "// This is a comment",
      option2: "/* This is a comment */",
      option3: "// This is a comment /*",
      option4: "/* This is a comment // */",
      answer: "// This is a comment",
    },
    {
      question: "3)Which keyword is used to define a constant in Java?",
      option1: "const",
      option2: "final",
      option3: "static",
      option4: "var",
      answer: "final",
    },
    {
      question:
        "4)Which of the following is NOT a primitive data type in Java?",
      option1: "int",
      option2: "float",
      option3: "String",
      option4: "boolean",
      answer: "String",
    },
    {
      question:
        "5)Which of the following is a valid declaration of a Java array?",
      option1: "int[] arr = new int[5];",
      option2: "int arr[] = new int[5];",
      option3: "Both of the Above",
      option4: "None of the Above",
      answer: "Both of the Above",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [marks, setMarks] = useState(0);
  const [answers, setAnswers] = useState(new Array(questions.length).fill(""));

  const handleNext = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestion((prev) => prev - 1);
  };

  const handleOptionChange = (event) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let score = 0;
    answers.forEach((selectedAnswer, index) => {
      if (selectedAnswer === questions[index].answer) {
        score++;
      }
    });
    setMarks(score);
  };

  return (
    <div className="slider">
      <Question
        question={questions[currentQuestion].question}
        option1={questions[currentQuestion].option1}
        option2={questions[currentQuestion].option2}
        option3={questions[currentQuestion].option3}
        option4={questions[currentQuestion].option4}
        onChange={handleOptionChange}
        checkedValue={answers[currentQuestion]}
      />
      <br></br>
      <div className="buttons">
        <button onClick={handlePrevious} disabled={currentQuestion === 0}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentQuestion === questions.length - 1}
        >
          Next
        </button>
        {currentQuestion === questions.length - 1 && (
          <button onClick={handleSubmit}>Submit Quiz</button>
        )}
      </div>
      {marks > 0 && (
        <div>
          <h2>
            Your Marks: {marks} / {questions.length}
          </h2>
        </div>
      )}
    </div>
  );
}

export default Slider;
