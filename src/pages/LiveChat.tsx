import { useState } from "react";
import Chat from "../components/Chat";
import Detail from "../components/Detail";
import List from "../components/List";
import { ChatList, ChatListContainer } from "../components/List/ChatList";
import MessageListCard from "../components/List/ChatList/MessageList";
import Userinfo from "../components/List/Userinfo";
import Login from "./Login";
const mockData = [
  {
    name: "john zeebra",
    image: "https://placehold.co/100",
    message: "hello",
  },
  {
    name: "john zeebra",
    image: "https://placehold.co/100",
    message: "hello",
  },
  {
    name: "john zeebra",
    image: "https://placehold.co/100",
    message: "hello",
  },
  {
    name: "john zeebra",
    image: "https://placehold.co/100",
    message: "hello",
  },
  {
    name: "john zeebra",
    image: "https://placehold.co/100",
    message: "hello",
  },
];

const LiveChat = () => {
  // todo need to update to global useState find userId than change status log true or false
  const [userLogin, setUserLogin] = useState(true);
  return (
    <>
      {userLogin ? (
        <div className="container">
          <List>
            <Userinfo name="salah" lastName="bangMo" />
            <ChatListContainer>
              <ChatList />
              {mockData.map((item, index) => (
                <MessageListCard
                  key={index}
                  image={item.image}
                  name={item.name}
                  message={item.message}
                />
              ))}
            </ChatListContainer>
          </List>
          <Chat />
          <Detail />
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};
export default LiveChat;
