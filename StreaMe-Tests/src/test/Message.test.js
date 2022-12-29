import Message from "../components/Message";
import { shallow } from "enzyme";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

test("should populate right message", () => {
  const message = {
    senderId: "wer-23-we-ewwer",
    text: "any message from user",
    img: "img-url",
  };

  const wrapper = shallow(
    <AuthContext.Provider>
      <ChatContext.Provider>
        <Message message={message} />
      </ChatContext.Provider>
    </AuthContext.Provider>
  );

  expect(wrapper).toMatchSnapshot();
});
