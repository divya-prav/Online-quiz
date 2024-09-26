import Icon from "../../public/quiz.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate();
  return (
    <div className="bg-white w-full h-20 flex justify-between pr-10">
      <button onClick={()=>navigate('/')}>
        <img src={Icon} alt="Icon" width={100} height={100} className="ml-10" />
      </button>
      <button
        className="font-bold border border-black rounded-md w-20 h-10 bg-blue-900 text-white place-self-center"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  );
}
