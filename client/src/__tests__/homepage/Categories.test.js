import { Categories } from "../../components/homepage/sections/Categories";
import { render, cleanup, screen, fireEvent, waitFor } from "@testing-library/react";
import { useEffect } from "react";

describe("Test Categories component", () => {

    let categoriesComponent;

    beforeEach(() => {
        categoriesComponent = render(<Categories />);
    });

    afterEach(() => {
        cleanup();
    });

    test("Should have 'CATS' text in document", () => {
        const catsText = screen.getByTestId("cats");
        expect(catsText.textContent).toMatch(/cats/i);
    });

    test("Should have 'DOGS' text in document", () => {
        const dogsText = screen.getByTestId("dogs");
        expect(dogsText.textContent).toMatch(/dogs/i);
    });

    test("Should have 'TREATS' text in document", () => {
        const treatsText = screen.getByTestId("treats");
        expect(treatsText.textContent).toMatch(/treats/i);
    });

});