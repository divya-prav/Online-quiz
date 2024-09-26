import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function handleClick() {
    setShowPassword(!showPassword);
  }

  async function formSubmit(data) {
    console.log(data)
    const res = await fetch('http://localhost:8080/auth/login/',{
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)})
    console.log(res)
    reset();
  }

  return (
    <div className="flex flex-col justify-center py-20 place-items-center shadow">
      <h2 className="font-bold text-3xl p-10">Login to Online Quiz!!</h2>
      <form onSubmit={handleSubmit(formSubmit)}>
        <fieldset className="border rounded-md border-black w-80 p-1 mb-5">
          <legend className="text-sm px-1">Email</legend>
          <div className="flex flex-row px-1">
            <MdEmail size={25} />
            <input
              type="text"
              className="bg-[#eef0f3] px-3 focus:outline-none text-xl"
              {...register("email", { required: true })}
            />
          </div>
        </fieldset>
        <fieldset className="border p-1 rounded-md border-black w-80 mb-5">
          <legend className="text-sm px-1">Password</legend>
          <div className="flex flex-row px-1">
            <RiLockPasswordFill size={25} />
            <input
              type={showPassword ? "text" : "password"}
              className="bg-[#eef0f3] px-3 focus:outline-none text-xl"
              {...register("password", { required: true })}
            />
            <button onClick={handleClick}>
              {showPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
            </button>
          </div>
        </fieldset>
        <div className="flex flex-row px-1">
          <p>New to Online Quiz</p>
          <button
            className="pl-2 text-blue-500 hover:underline"
            onClick={() => navigate("/signup")}
          >
            {" "}
            Sign up!!!
          </button>
        </div>
        <button className="font-bold border border-black rounded-md w-20 h-10 bg-blue-900 text-white my-5">
          Log In
        </button>
      </form>
    </div>
  );
}
