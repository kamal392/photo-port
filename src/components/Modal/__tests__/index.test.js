import react from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

const mockToggleModal = jest.fn();
// passed props from PhotoList component in order to render Modal component
const currentPhoto = {
  name: "Park bench",
  category: "landscape",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
  index: 1,
};

// To clean up each test.
afterEach(cleanup);

describe("Modal component", () => {
  it("renders", () => {
    render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

// Describe method to details what been tested

describe("Click Event", () => {
  it("calls onClose handler", () => {
    // Arrange:Render Modal
    const { getByText } = render(
      <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
    );
    // Act:Simulate click event
    fireEvent.click(getByText("Close this modal"));
    // Assert:Expected matcher
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});
