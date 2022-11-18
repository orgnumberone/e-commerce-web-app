import React from 'react';
import { Image } from './Image';
import { Categories } from './Categories';
import { Latest } from './Latest';
import { Banner } from './Banner';
import { BestSellers } from './BestSellers';
import { Benefits } from './Benefits';
import { Blogs } from './Blogs';
import { Newsletter } from './Newsletter';
import "../../../App.css";

export const Homepage = () => {
    return (
        <>
            <Image />
            <div className="main">
                <Categories />
                <Latest />
            </div>
            <Banner />
            <div className="main">
                <BestSellers />
                <Benefits />
                <Blogs />
            </div>
            <Newsletter />
        </>
    )
}
