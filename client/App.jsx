
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import TakeAQuiz from "./components/TakeAQuiz";
import MakeAQuiz from "./components/MakeAQuiz";
import YourQuiz from "./components/categories/YourQuiz";
import Quiz from "./components/categories/Quiz";
import Header from "./components/categories/Header";
import Login from "./components/categories/Login";
import Signup from "./components/categories/Signup";

const App = () => {
  return (
    <div className="h-screen bg-[#eef0f3]">
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/takequiz" element={<TakeAQuiz />} />
        <Route path="/quiz/:category" element={<Quiz/>}/>
        <Route path="/makequiz" element={<MakeAQuiz />} />{" "}
        <Route path="/yourQuiz" element={<YourQuiz/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>

      </Routes>
    </div>
  );
};

export default App;
