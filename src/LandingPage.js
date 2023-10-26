import React from "react";
import Card from "./components/Card";

import { Link } from "react-router-dom";


const LandingPage = () => {
    return (
        <>
            <div className="font-[Inter]">

                <div className="flex md:flex-row flex-col gap-5 justify-center md:justify-between my-10 mx-5">
                    <h1 className="text-white bg-[#111] px-5 py-2">Website Name/Logo</h1>
                    <div className="flex gap-2">
                        <h1 className="text-white bg-[#111] px-5 py-2">Location</h1>
                        <input type = "text" id = "search-bar" className="bg-[#D3D3D3] outline-none text-gray px-3 md:px-5 py-2" placeholder="Search:"/>
                    </div>
                </div>

                <div id = "food-types-container" className="my-10 mx-5">
                    <h1 className="rounded-md font-medium text-2xl py-2 px-5 border-2 border-[#D3D3D3] w-[50%] lg:w-[20%] mx-auto lg:mx-0 text-center">Food Item Categories</h1>
                    <div className="lg:ml-20 text-center my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-5 items-center">
                        <Card title = "Burger" />
                        <Card title = "Pizza" />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>

                <div id="restaurants-container" className="my-10 mx-5">
                    <h1 className="rounded-md font-medium text-2xl py-2 px-5 border-2 border-[#D3D3D3] w-[50%] lg:w-[20%] mx-auto lg:mx-0 text-center">Restaurants</h1>
                    <div className="lg:ml-20 text-center my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-5 items-center">
                        <Link to="/restaurant/mcd">
                            <Card />
                        </Link>
                        <Link to="/restaurant/kfc">
                            <Card />
                        </Link>
                        <Link to="/restaurant/empire">
                            <Card />
                        </Link>
                        <Link to="/restaurant/4">
                            <Card />
                        </Link>
                        <Link to="/restaurant/5">
                            <Card />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;