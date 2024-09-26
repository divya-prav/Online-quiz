import { useEffect, useState } from "react";

export default function HtmlQuiz() {
  const [html, setHtml] = useState([]);
  const solution = [];
  let [result, setResult] = useState(null);

  useEffect(async () => {
    try {
      const result = await fetch("http://localhost:8080/api/html");
      const res = await result.json();
      // console.log(res[0].questions)
      setHtml(res[0].questions);
    } catch (e) {
      console.error(e.message);
    }
  }, []);

  function handleClick() {
    console.log(solution);
    let count = 0;
    for (let i = 0; i < html.length; i++) {
      console.log(html[i].answer)
      if (html[i].answer === solution[i]) {
        
        count++;
      }
    }
    setResult(count);
  }

  return (
    <div className="bg-[#606676] flex flex-col p-10 w-full">
      <h1 className="text-3xl place-self-center font-bold text-white mb-11">HTML Quiz</h1>
      {result && <h1 className="text-3xl place-self-center font-bold text-white mb-11">{`You Scored : ${result}`}</h1>}
      {html &&
        html.map((ques, i) => {
          return (
            <div className="flex flex-row py-10 items-start justify-start bg-gray-300 p-10 m-2 rounded-xl flex-wrap">
              <div className="w-1/2">
                <h2 className="text-xl font-semibold pr-20">{`${i + 1}.${" "}${
                  ques.question
                }`}</h2>
              </div>
             
              <div className="w-1/2">
                <input
                  type="radio"
                  id="question1"
                  name={`html${i}`}
                  value="A"
                  onChange={(e) => (solution[i] = e.target.value)}
                  className="w-4 h-4"
                />
                <label className="border-solid border-white p-4 text-xl">
                  {ques.options.A}
                </label>
                <br />
                <input
                  type="radio"
                  id="question2"
                  name={`html${i}`}
                  value="B"
                  onChange={(e) => (solution[i] = e.target.value)}
                  className="w-4 h-4"
                />
                <label className="border-solid border-white p-4 text-xl text-wrap">
                  {ques.options.B}
                </label>
                <br />
                <input
                  type="radio"
                  id="question3"
                  name={`html${i}`}
                  value="C"
                  onChange={(e) => (solution[i] = e.target.value)}
                  className="w-4 h-4"
                />
                <label className="border-solid border-white p-4 text-xl text-wrap">
                  {ques.options.C}
                </label>
                <br />
                <input
                  type="radio"
                  id="question4"
                  name={`html${i}`}
                  value="D"
                  onChange={(e) => (solution[i] = e.target.value)}
                  className="w-4 h-4"
                />
                <label className="border-solid border-white p-4 text-xl text-wrap">
                  {ques.options.D}
                </label>
                <br />
               
              </div>
            
            </div>
          );
        })}

      <button type="submit" onClick={handleClick} className="bg-blue-900 rounded-xl w-64 h-10 place-self-center mt-10 text-white">
        Submit
      </button>
    </div>
  );
}
