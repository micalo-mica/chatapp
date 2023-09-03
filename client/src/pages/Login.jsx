import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ADD_LOGIN } from "../graph/operations/user";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const { email, password } = info;

  const handleInfo = (e) => {
    e.preventDefault();
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  // apollo useMutation
  const [Login, { data, loading, error }] = useMutation(ADD_LOGIN);

  // submitting info to the server
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Login({
        variables: { login: { email, password } },
      });
      if (data.addLogin.success == true) {
        // save in local
        localStorage.setItem("user", JSON.stringify(data.addLogin.credential));
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className=" h-[100vh] w-full p-4 flex items-center justify-center bg-gray-900">
      <div className=" bg-gray-300 p-4 shadow-gray-400 shadow-xl">
        <h2 className="text-center text-lg font-medium">MicChat</h2>
        {/* form */}
        <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-lg font-bold text-slate-600">
              email
            </label>
            <input
              type="text"
              className=" h-12 rounded-lg px-2 w-72"
              onChange={handleInfo}
              name="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-lg font-bold text-slate-600">
              password
            </label>
            <input
              type="password"
              className="w-72 h-12 rounded-lg px-2 "
              onChange={handleInfo}
              name="password"
              placeholder="your password"
            />
          </div>
          <button className="p-2 border-none text-blue-500" type="submit">
            login
          </button>
        </form>
        {/* forgot andr.... */}
        <div className="flex items-center justify-between mt-3">
          <Link to="/register">
            <button className="bg-blue-600 p-1 rounded-lg  text-white">
              register
            </button>
          </Link>
          <Link to="/">
            <button className="bg-blue-600 p-1 rounded-lg  text-white">
              forgot password
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
