import List from "./components/List";
import bg from "../src/assets/bg.avif";
import "./App.css";
import Chat from "./components/Chat";
import Detail from "./components/Detail";
import Userinfo from "./components/List/Userinfo";
import ChatList from "./components/List/ChatList";

function App() {
  return (
    <div className="container" style={{ backgroundImage: `${bg}` }}>
      <List>
        <Userinfo name={"salah"} lastName={"bangMo"} />
        <ChatList />
      </List>
      <Chat />
      <Detail />
    </div>
  );
}

export default App;
