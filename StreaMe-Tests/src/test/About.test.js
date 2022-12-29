import Business from "../components/About";
import { shallow } from "enzyme";

test("should take proper snapshot", () => {
  const wrapper = shallow(<Business />);
  expect(wrapper).toMatchSnapshot();
});
