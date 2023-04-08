import { render, screen } from "@testing-library/react";
import AvatarMenu from ".";

describe("Avatar Menu", () => {
  it("should show Avatar Menu on screen", async () => {
    render(<AvatarMenu />);

    const menu = await screen.getByTestId("menuAvatar");
    expect(menu).toBeInTheDocument;
  });
});
