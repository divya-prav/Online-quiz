import { useForm } from "react-hook-form";

export default function Signup() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const formSubmit = async (data) => {
    console.log(data);
    const res = await fetch("http://localhost:8080/auth/signin/", {
      method: "POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data),
    });
    console.log(res);
    reset();
  };

  return (
    <div className="border-solid p-10 border-blue-950">
      <h2 className="font-bold text-3xl pb-10">Sign In to Online Quiz!!</h2>
      <form onSubmit={handleSubmit(formSubmit)}>
        <fieldset className="border rounded-md border-black w-80 p-1 mb-5">
          <legend className="text-sm px-1">Name</legend>
          <div className="flex flex-row px-1">
            <input
              type="text"
              className="bg-[#eef0f3] px-3 focus:outline-none text-xl"
              {...register("name", { required: true })}
            />
          </div>
        </fieldset>
        <fieldset className="border rounded-md border-black w-80 p-1 mb-5">
          <legend className="text-sm px-1">Email</legend>
          <div className="flex flex-row px-1">
            <input
              type="text"
              className="bg-[#eef0f3] px-3 focus:outline-none text-xl"
              {...register("email", { required: true })}
            />
          </div>
        </fieldset>
        <fieldset className="border rounded-md border-black w-80 p-1 mb-5">
          <legend className="text-sm px-1">Password</legend>
          <div className="flex flex-row px-1">
            <input
              type="password"
              className="bg-[#eef0f3] px-3 focus:outline-none text-xl"
              {...register("password", { required: true })}
            />
          </div>
        </fieldset>
        <button className="font-bold border border-black rounded-md w-20 h-10 bg-blue-900 text-white my-5">
          Sign In
        </button>
      </form>
    </div>
  );
}
