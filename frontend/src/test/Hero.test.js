import React from 'react'
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom"
import Hero from "../landing_page/home/Hero"


describe("Hero component",()=>{
    test('Render Hero Image', () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("heroImage");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","./images/homeHero.png");
    })
    

})