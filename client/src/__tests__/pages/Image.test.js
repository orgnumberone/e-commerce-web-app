import { Image } from "../../components/homepage/sections/Image";
import { render, cleanup } from "@testing-library/react";

describe("Test main image component", () => {

    let imageComponent;

    beforeEach(() => {
        imageComponent = render(<Image />);
    });

    afterEach(() => {
        cleanup();
    });

    test("Should render Homepage image", () => {
        const image = document.querySelector("img");
        expect(image.src).toContain("background.png");
    });
});
