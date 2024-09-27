import { useNavigate,useParams } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  const {name:name} = useParams(); 

  return (

    <div className="h-screen bg-[#606676] flex items-center justify-center">
      <div>
        <h1 className="text-6xl p-10">Welcome to Online Quiz!!</h1>
      </div>
      <div>
        {name && <h1 className="text-6xl p-10">Hello {name}</h1>}
      </div>
      <div className="flex flex-col p-10">
        <button
          onClick={() => navigate("/takequiz")}
          className="border-solid bg-gray-400 py-2 px-20 m-1 rounded-md text-xl"
        >
          Take a Quiz
        </button>
        <button
          onClick={() => navigate("/makequiz")}
          className="border-solid bg-gray-400 py-2 px-20 m-1 rounded-md text-xl"
        >
          {" "}
          Make a Quiz
        </button>
      </div>
    </div>
  );
}
