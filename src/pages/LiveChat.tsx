import Chat from "../components/Chat";
import Detail from "../components/Detail";
import List from "../components/List";
import { ChatList, ChatListContainer } from "../components/List/ChatList";
import MessageListCard from "../components/List/ChatList/MessageList";
import Userinfo from "../components/List/Userinfo";
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
  return (
    <div className="container">
      <List>
        <Userinfo name={"salah"} lastName={"bangMo"} />
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
  );
};
export default LiveChat;
