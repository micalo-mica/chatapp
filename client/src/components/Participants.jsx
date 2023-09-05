import React from "react";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

function Participants({ participants, removeParticipant }) {
  return (
    <div className="mt-2">
      {participants.map((participant) => {
        return (
          <div
            className=" flex items-center justify-between shadow-md shadow-gray-800 px-2 py-2 mt-1"
            key={participant._id}
          >
            <h4 className="text-lg">{participant.username}</h4>
            <div
              className="text-[1.6rem]"
              onClick={() => {
                removeParticipant(participant._id);
              }}
            >
              <MdOutlineRemoveCircleOutline />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Participants;
