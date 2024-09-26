import { useNavigate } from "react-router-dom";

export default function TakeAQuiz() {
  const navigate = useNavigate();
  
  let listOfCategory = ["html", "css", "git", "js", "advjs", "women"];

  let style =
    "bg-gray-400 py-2 px-20 m-1 rounded-md text-xl w-72 h-20 text-white hover:bg-white hover:text-blue-500 ";
 
  return (
    <div className="h-screen bg-[#606676] flex flex-col items-center">
      <div className="py-4 px-10">
        <h2 className="text-3xl text-white">Categories</h2>
        <small>Select categories from below </small>
      </div>
      <ul>
        {listOfCategory.map((category) => (
          <li>
            <button className={style} onClick={()=>navigate(`/quiz/${category}`)}>
              {category.toUpperCase()}
            </button>
          </li>
        ))}
       
      </ul>
    </div>
  );
}
