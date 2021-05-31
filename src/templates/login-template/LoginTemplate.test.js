import { render } from "@testing-library/react";
import LoginTemplate from "./LoginTemplate";

describe("test in LoginTemplate component", () => {
  test("show error with value error form", () => {
    render(<LoginTemplate/>)
  })
})
