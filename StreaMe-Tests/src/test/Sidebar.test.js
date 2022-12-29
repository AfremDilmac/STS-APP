import Sidebar from "../components/Sidebar";
import { shallow } from "enzyme";
import ChatNavbar from "../components/ChatNavbar";
import Search from "../components/Search";
import Chats from "../components/Chats";

test("testing sidebar", () => {
  const wrapper = shallow(<Sidebar />);
  expect(wrapper.find(ChatNavbar)).toHaveLength(1);
  expect(wrapper.find(Search)).toHaveLength(1);
  expect(wrapper.find(Chats)).toHaveLength(1);
});
