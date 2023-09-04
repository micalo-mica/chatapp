import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Modal({ openModal, setOpenModal }) {
  const [username, setUsername] = useState("");
  return (
    <div
      className={
        openModal
          ? "flex justify-center items-center w-full h-screen bg-black/50  fixed top-0 left-0"
          : "hidden"
      }
    >
      <div className="p-4 bg-gray-700 relative transition duration-500 ease-in w-[20rem] md:w-[30rem] rounded-xl">
        {/* close container */}
        <div
          className=" absolute top-2 right-3 text-3xl"
          onClick={() => setOpenModal(false)}
        >
          <AiOutlineCloseCircle />
        </div>
        {/* contents */}
        <div className="flex flex-col gap-3 mt-10">
          <input
            type="text"
            placeholder="eg: username"
            className="rounded-md h-10 placeholder-gray-400 focus:outline-none appearance-none py-2 px-2 w-full focus:ring-blue-500 focus:border-blue-500 text-gray-300 md:h-10"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className=" w-full py-1 px-1 border-solid border-2 border-gray-400 rounded-md">
            search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;