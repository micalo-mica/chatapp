import ConversationContainer from "../components/ConversationContainer";
import FeedContainer from "../components/FeedContainer";
import Modal from "../components/Modal";

function Home() {
  return (
    <div className="h-screen flex">
      <ConversationContainer />
      <FeedContainer />
      {/* <Modal /> */}
    </div>
  );
}

export default Home;
