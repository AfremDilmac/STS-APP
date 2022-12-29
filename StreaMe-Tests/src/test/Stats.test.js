import Stats from "../components/Stats";
import { shallow } from "enzyme";

test("should populate Stats with constant data", () => {
  const wrapper = shallow(<Stats />);
  expect(wrapper).toMatchSnapshot();
});
