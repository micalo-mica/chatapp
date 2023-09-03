import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ADD_SIGN_UP } from "../graph/operations/user";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  const { username, name, email, password } = info;

  // handle input
  const handleInfo = (e) => {
    e.preventDefault();
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  // apollo useMutation
  const [Register, { data, loading, error }] = useMutation(ADD_SIGN_UP);

  // submitting info to the server
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Register({
        variables: { register: { username, name, email, password } },
      });
      if (data.addRegister.success == true) {
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className=" h-[100vh] w-full p-4 flex items-center justify-center  bg-gray-900">
      <div className=" bg-gray-300 p-4 shadow-gray-400 shadow-xl">
        <h2 className="text-center text-lg font-medium">MicChat</h2>
        {/* form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-lg font-bold text-slate-600">
              username
            </label>
            <input
              type="text"
              name="username"
              className=" h-12 rounded-lg px-2 w-72"
              placeholder="username"
              onChange={handleInfo}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-lg font-bold text-slate-600">
              name
            </label>
            <input
              type="text"
              name="name"
              className=" h-12 rounded-lg px-2 w-72"
              placeholder="username"
              onChange={handleInfo}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-lg font-bold text-slate-600">
              email
            </label>
            <input
              type="text"
              name="email"
              placeholder="Your email"
              className=" h-12 rounded-lg px-2 w-72"
              onChange={handleInfo}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-lg font-bold text-slate-600">
              password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="w-72 h-12 rounded-lg px-2 "
              onChange={handleInfo}
            />
          </div>
          <button className="p-2 border-none text-blue-500" type="submit">
            Create Account
          </button>
        </form>
        {/* forgot andr.... */}
        <div className="flex items-center justify-between mt-3">
          <Link to="/login">
            <button className="bg-blue-600 p-1 rounded-lg  text-white">
              login
            </button>
          </Link>
          <button className="bg-blue-600 p-1 rounded-lg  text-white">
            forgot password
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
