import React from 'react'
import './styles/main.css'
import './styles/index.css'
import { Link } from "react-router-dom";
import Image from './images/Apartment.svg'
function App() {

  return (
<body className="antialiased">

    <header className="header my-8">
        <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                <div className="header-wrapper flex items-center justify-between">

                    <div className="header-logo">
                        <h1 className="font-semibold text-black leading-relaxed"><a href="">Property Pro</a></h1>
                    </div>

                    <div className="toggle md:hidden">
                        <button>
                            <svg
                                className="h-6 w-6 fill-current text-black"
                                fill="none" strokeLinecap="round"
                                strokeLinejoin="round" strokeWidth="2"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <navbar className="navbar hidden md:block">
                        <ul className="flex space-x-8 text-sm font-semibold">
                            <li>
                                <Link to={"/register"} className="hover:text-orange-500">Sign Up</Link>
                            </li>
                            <li>
                                <Link to={"/login"} className="hover:text-orange-500">Log In</Link>
                            </li>
                            <li>
                                <a href="#" className="hover:text-orange-500">Share</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-orange-500">Feedback</a>
                            </li>
                        </ul>
                    </navbar>

                </div>
        </div>

    </header>

    <div className="hero bg-gray-100 py-16">
        <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
            <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                <div className="hero-text col-span-6">
                    <h1 className=" font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight">Unlock Property Management Excellence.</h1>
                    <hr className=" w-12 h-1 bg-orange-500 rounded-full mt-8" />
                    <p className="text-gray-800 text-base leading-relaxed mt-8 font-semibold">Effortlessly Manage Properties and boost your ROI with our innovative app</p>
                </div>
                <div className="hero-image col-span-6">
                    <img src={Image} alt="hero image" />
                </div>
            </div>
        </div>
    </div>
</body>
  )
}
export default App