import Ava from "../assets/avatar.png";

function UserSearchList({ users, addParticipant }) {
  return (
    <>
      {users.length === 0 ? (
        <h4 className="text-center mt-4">No user found</h4>
      ) : (
        <div className="mt-2">
          {users.map((user) => {
            return (
              <div
                key={user._id}
                className=" mt-1 flex items-center justify-between "
              >
                <div className="flex items-center gap-1">
                  <img
                    src={Ava}
                    alt=""
                    className="w-[2rem] h-[2rem] rounded-full"
                  />
                  <span className="text-white text-lg">{user.username}</span>
                </div>
                <div>
                  <button
                    className=" bg-slate-600 p-2 rounded-lg shadow-lg shadow-gray-800"
                    onClick={() => addParticipant(user)}
                  >
                    Add
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default UserSearchList;
