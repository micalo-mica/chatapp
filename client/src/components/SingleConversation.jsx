import Ava from "../assets/avatar.png";

function SingleConversation({ c }) {
  return (
    <div className="flex items-center mt-2">
      <img src={Ava} alt="" className="h-[1.8rem] w-[1.8rem] rounded-full" />
      <span className="text-sm">{c?._id}</span>
    </div>
  );
}

export default SingleConversation;
