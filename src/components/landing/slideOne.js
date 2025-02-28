import React from 'react';
import slide from '../../res/img/slideOne.png'
import { useNavigate } from "react-router-dom";

const SlideOne = () => {

    const navigate = useNavigate();

    function redirectSignIn() {
        navigate("/signin");
    }
    function redirectSignUp() {
        navigate("/signup");
    }


    return (
        <div className="flex flex-col items-center dark:bg-black">

            <h1 className="text-6xl font-black mt-20 max-md:text-3xl dark:text-white">Ai Course Generator</h1>

            <p className="text-center text-black mt-6 max-w-2xl font-medium max-md:text-xs dark:text-white">
            Easily create personalized courses tailored to your needs.
            Interact with an AI teacher chat, generate courses in 23+ languages, and test your knowledge with AI-generated quizzes.
            Download courses for offline access and take notes as you go. Transform your learning experience today!
            </p>

            <div className="flex space-x-4 mb-4 mt-6">
                <button onClick={redirectSignIn} className="border-black text-black border px-3 py-2 font-medium dark:border-white dark:text-white">
                    SignIn
                </button>
                <button onClick={redirectSignUp} className="bg-black text-white px-3 py-2 font-medium dark:bg-white dark:text-black">
                    SignUp
                </button>
            </div>

            <img
                src={slide}
                alt="Your Alt Text"
                className="rounded-2xl max-lg:rounded-lg max-md:rounded-md custom-shadow w-full max-w-screen-xl max-xl:w-11/12 max-md:w-11/12 mx-auto my-10 md:my-10"
            />
        </div>
    );
};

export default SlideOne;
