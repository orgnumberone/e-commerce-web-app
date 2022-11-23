import { Latest } from "../../components/homepage/sections/Latest";
import { render, cleanup } from "@testing-library/react";

describe("Test Latest Component", () => {
    let latestComponent;

    beforeEach(() => {
        latestComponent = render(<Latest />)
    });

    afterEach(() => {
        cleanup();
    });

    test("Expect 10 products to be displayed", async () => {
        const { getAllByTestId } = render(<Latest />);
        console.log(getAllByTestId("latest").length)
        expect(getAllByTestId("latest").length).toEqual(10);
    });

    test("Button color changes when button is clicked", () => {

    });
})