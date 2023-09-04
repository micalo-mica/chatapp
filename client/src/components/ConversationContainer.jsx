import { useState } from "react";
import Modal from "./Modal";
import { BsSearch } from "react-icons/bs";

function ConversationContainer() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="w-full md:w-[400px] bg-[#2a3447] py-4 px-2 ">
      {/* search text container */}
      <div
        className="px-2 py-2 md:px-4 md:py-4 mb-4 mt-1 bg-[#222b3c] rounded-lg shadow-lg shadow-gray-800 cursor-pointer flex items-center justify-between"
        onClick={() => setOpenModal(true)}
      >
        <h2 className="text-center text-xl md:text-2xl"> start conversation</h2>
        <div className="text-xl md:text-2xl">
          <BsSearch />
        </div>
      </div>
      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}

export default ConversationContainer;
