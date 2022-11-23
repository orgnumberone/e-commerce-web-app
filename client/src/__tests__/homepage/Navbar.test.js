import { Navbar } from "../../components/homepage/sections/Navbar";
import { render, cleanup } from "@testing-library/react";

describe("Test Navbar component", () => {

    let navbarComponent;

    beforeEach(() => {
        navbarComponent = render(<Navbar />);
    });

    afterEach(() => {
        cleanup();
    });

    test("Logo is displayed", async() => {
        const image = document.querySelector("img")
        expect(image.src).toContain("logo.png")
    });

    test("Expect links to be in document", async () => {
        const links = document.querySelectorAll("p");
        const array = ["HOME", "SHOP", "PROMOTION", "PAGES", "BLOG", "CONTACT"];
        for (let i = 0; i < links.length; i++) {
            expect(links[i].textContent).toBe(array[i]);
        }
    });
});