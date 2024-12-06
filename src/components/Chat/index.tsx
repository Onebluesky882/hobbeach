import css from "./style.module.css";
import { ButtonSection } from "./ButtonSection";
import { TopBar } from "./Topbar";
const Chat = () => {
  return (
    <Container>
      <TopBar />
    </Container>
  );
};

export const Container = ({ children }: React.PropsWithChildren) => {
  return <div className={css["container"]}>{children}</div>;
};

export default Chat;
