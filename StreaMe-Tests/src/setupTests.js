import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

// pass an instance of jest to `enableHooks()`

Enzyme.configure({ adapter: new Adapter() });
