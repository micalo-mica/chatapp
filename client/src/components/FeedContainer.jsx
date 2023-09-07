import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

function FeedContainer() {
  const [searchParams, setSearchParams] = useSearchParams();
  const conversationId = searchParams.get("conId");

  return (
    <div className={conversationId ? "flex  w-full" : "hidden md:flex "}>
      {conversationId ? (
        <div>{conversationId}</div>
      ) : (
        <div className=""> No conversation selected</div>
      )}
    </div>
  );
}

export default FeedContainer;
