import css from "./style.module.css";

import { TopBar } from "./TopBar";
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
