import Navbar from "../components/Navbar";
import { shallow } from "enzyme";

test("should take snapshot of  Navbar", () => {
  const wrapper = shallow(<Navbar />);
  expect(wrapper).toMatchSnapshot();
});
