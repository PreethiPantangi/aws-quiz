"use client";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Question = () => {
  const question = {
    id: "2c790b28-7251-4f7d-81c4-1faf99a77a5c",
    question_num: "1",
    question:
      "A company wants to rightsize its Amazon EC2 instances. Which configuration change will meet this requirement with the LEAST operational overhead?",
    options: {
      A: "Add EC2 instances in another Availability Zone.",
      B: "Change the size and type of the EC2 instances based on utilization.",
      C: "Convert the payment method from On-Demand to Savings Plans.",
      D: "Reprovision the EC2 instances with a larger instance type.",
    },
    answer: [
      {
        answer_id: "3c0bbc7c-301c-48bb-9298-f8dd29728df3",
        answer: "B",
      },
    ],
  };

  const [answerClassName, setAnswerClassName] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const checkAnswer = (answer) => {
    const isCorrect = answer === question.answer[0].answer;
    console.log("selectedAnswer - " + answer + " " + isCorrect);
    if (isCorrect) {
      setAnswerClassName("bg-green-500"); 
    } else {
      setAnswerClassName("bg-red-500"); 
    }
    setSelectedAnswer(answer);
  };

  return (
    <div>
      <div className="mb-4">
        <div>
          {question.question_num}. &nbsp; {question.question}
        </div>
        <div className="ml-5 mt-5">
          {Object.entries(question.options).map(([key, value]) => (
            <div
              key={key}
              className={`flex justify-between mb-2 border border-transparent hover:border-gray-500 p-4 hover:cursor-pointer ${key === selectedAnswer ? answerClassName : ""}`}
              onClick={() => checkAnswer(key)}
            >
              {key}. &nbsp; {value}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between space-x-4">
        <div className="flex items-center cursor-pointer hover:underline">
          <FaArrowLeft className="mr-2" />
          <span>Previous</span>
        </div>
        <div className="flex items-center cursor-pointer hover:underline">
          <span>Next</span>
          <FaArrowRight className="ml-2" />
        </div>
      </div>
    </div>
  );
};

export default Question;
