import React from "react";
import SingleConversation from "./SingleConversation";

function ConversationList({ conversations }) {
  return (
    <div className="">
      {conversations &&
        conversations.map((c) => (
          <div key={c._id}>
            <SingleConversation c={c} />
          </div>
        ))}
    </div>
  );
}

export default ConversationList;
