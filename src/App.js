import React from "react";
import questions from "./data";
import SingleQuestion from "./SingleQuestion";

const App = () => {
  return (
    <main>
      <div className="container">
        <h3 style={{ fontWeight: "bold" }}>
          questions and answers related to programming
        </h3>
        <section>
          {questions.map((item) => {
            return <SingleQuestion key={item.id} {...item} />; //spreading the properties
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
