import React from "react";

const Chat = () => {
  return (
    <div className="bg-gray-100 w-full  flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full h-screen">
      <div className="flex items-center mb-4 p-7 bg-gray-100 shadow-md">
        <img
          src="https://images.unsplash.com/photo-1680790515529-6a9278b541ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          alt="Avatar"
          className="w-8 h-8 rounded-full mr-2"
        />
        <h2 className="text-lg font-semibold">John Doe</h2>
      </div>
      <div className="bg-blue-200 p-4 rounded-lg text-left max-w-xs my-4 mx-5 mr-auto">
        <p>Hey, how are you?</p>
      </div>
      <div className="bg-green-200 p-4 rounded-lg text-right max-w-xs my-4 mx-5 ml-auto">
        <p>I'm good, thanks for asking!</p>
      </div>
    </div>
  );
};

export default Chat;