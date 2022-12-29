import FeedbackCard from "../components/FeedbackCard";
import { shallow } from "enzyme";

test("should take snapshot of feedbackCard comming from props", () => {
  // Props which feedbackCard requires are
  let content, name, title, img;
  content = "some context";
  name = "any name";
  title = "title ";
  img = "img";

  const wrapper = shallow(
    <FeedbackCard content={content} name={name} title={title} img={img} />
  );

  expect(wrapper).toMatchSnapshot();
});
