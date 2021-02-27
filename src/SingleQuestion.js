import React, { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const SingleQuestion = ({ title, info }) => {
  const [showinfo, setSetInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setSetInfo(!showinfo)}>
          {/* conditonal rendering*/}
          {showinfo ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
        </button>
      </header>
      {showinfo && <p>{info}</p>} {/* short circuit evaluation*/}
    </article>
  );
};

export default SingleQuestion;
