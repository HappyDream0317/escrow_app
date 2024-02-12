import { useEffect } from "react";
import React, { useState } from "react";
export default function Header() {
    const [isLoading, setIsLoading] = useState(true);
    const [islogin, setIslogin] = useState(false);
    const [isprofile, setIsprofile] = useState(false);
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        transaction: 0,
    });
    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem("jwt_token");
            await verify_token(token);
            setIsLoading(false);
        };

        verifyToken();
    }, []);

    const verify_token = async (token) => {
        try {
            const response = await fetch("/api/user/authentication", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token }),
            });
            const data = await response.json();
            if (response.ok) {
                if (data.success === true) {
                    setUserData(data.data);
                    setIslogin(true);
                } else {
                    setIslogin(false);
                    localStorage.clear();
                }
            }
        } catch (error) {
            console.log("Error creating account:", error);
            // Handle error logic here
        }
    };

    const handleToggle = () => {
        const tag = document.getElementById("mobile-navbar");
        tag.style.display = "block";
    };
    const hideMobile = () => {
        const tag = document.getElementById("mobile-navbar");
        tag.style.display = "none";
    };
    const toggleProfile = () => {
        setIsprofile(!isprofile);
    };
    const signOut = () => {
        localStorage.clear();
        window.location.href = "/";
    };
    return (
        <div>
            {isLoading ? (
                <div></div>
            ) : (
                <div className="bg-[#F7F7F7] w-full">
                    <div
                        id="main-navbar"
                        className="w-full px-5 smpx-0 lg:w-[80%] 2xl:w-[65%] mx-auto"
                    >
                        <div className="mx-auto flex items-center justify-between gap-1 sm:gap-5 py-5 rounded-lg">
                            <a
                                className="text-primary font-bold text-2xl sm:text-3xl"
                                href="/"
                                previewlistener="true"
                            >
                                Escrow Myanmar
                            </a>
                            <nav className="hidden lg:block">
                                <ul className="flex items-center flex-wrap gap-5">
                                    {islogin ? (
                                        <li className="transition-all hover:text-primary">
                                            <a
                                                href="/main"
                                                previewlistener="true"
                                            >
                                                HomePage
                                            </a>
                                        </li>
                                    ) : (
                                        ""
                                    )}
                                    <li className="transition-all hover:text-primary">
                                        <a href="/about" previewlistener="true">
                                            Our Purpose
                                        </a>
                                    </li>
                                    <li className="transition-all hover:text-primary">
                                        <a href="/about#about">About Us</a>
                                    </li>
                                    <li className="transition-all hover:text-primary">
                                        <a
                                            href="/contact"
                                            previewlistener="true"
                                        >
                                            Contact Us
                                        </a>
                                    </li>
                                    <li className="transition-all hover:text-primary">
                                        <a href="/contact#faq">Faq</a>
                                    </li>
                                    <li className="transition-all hover:text-primary">
                                        <a href="/main" previewlistener="true">
                                            Feedback
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <div>
                                {!islogin ? (
                                    <div className="flex items-center gap-7">
                                        <a
                                            className="bg-[#e0eeff] text-primary rounded-md transition-all hover:bg-[#CFE5FC] false px-4 py-2 hidden lg:flex items-center gap-2"
                                            href="/login"
                                            previewlistener="true"
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 24 24"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="Login">
                                                    <g>
                                                        <path d="M20.944,18.432a2.577,2.577,0,0,1-2.729,2.5c-2.153.012-4.307,0-6.46,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.63a1.545,1.545,0,0,0-.969-1.471,3.027,3.027,0,0,0-1.061-.095H11.755a.5.5,0,0,1,0-1c2.225,0,4.465-.085,6.688,0a2.566,2.566,0,0,1,2.5,2.67Z"></path>
                                                        <path d="M15.794,12.354a.459.459,0,0,0,.138-.312A.3.3,0,0,0,15.938,12a.29.29,0,0,0-.006-.041.455.455,0,0,0-.138-.313L12.125,7.978a.5.5,0,0,0-.707.707L14.234,11.5H3.492a.5.5,0,0,0,0,1H14.234l-2.816,2.815a.5.5,0,0,0,.707.707Z"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                            <span>Login</span>
                                        </a>
                                        <a
                                            className="bg-[#e0eeff] text-primary rounded-md transition-all hover:bg-[#CFE5FC] false px-4 py-2 hidden lg:flex items-center gap-2"
                                            href="/register"
                                            previewlistener="true"
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 24 24"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="Login">
                                                    <g>
                                                        <path d="M20.944,18.432a2.577,2.577,0,0,1-2.729,2.5c-2.153.012-4.307,0-6.46,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.63a1.545,1.545,0,0,0-.969-1.471,3.027,3.027,0,0,0-1.061-.095H11.755a.5.5,0,0,1,0-1c2.225,0,4.465-.085,6.688,0a2.566,2.566,0,0,1,2.5,2.67Z"></path>
                                                        <path d="M15.794,12.354a.459.459,0,0,0,.138-.312A.3.3,0,0,0,15.938,12a.29.29,0,0,0-.006-.041.455.455,0,0,0-.138-.313L12.125,7.978a.5.5,0,0,0-.707.707L14.234,11.5H3.492a.5.5,0,0,0,0,1H14.234l-2.816,2.815a.5.5,0,0,0,.707.707Z"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                            <span>Sign Up</span>
                                        </a>
                                    </div>
                                ) : (
                                    <div>
                                        <div
                                            className="header-profile-btn"
                                            onClick={toggleProfile}
                                        >
                                            <div
                                                className="rounded"
                                                style={{
                                                    width: "50px",
                                                    height: "50px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontSize: "20px",
                                                }}
                                            >
                                                N
                                            </div>
                                            <img
                                                src="/images/Check_icon.png"
                                                style={{
                                                    width: "12px",
                                                    height: "12px",
                                                    marginTop: "17px",
                                                    marginLeft: "5px",
                                                }}
                                            />
                                        </div>
                                        {isprofile && (
                                            <div className="header-user-simple-profile">
                                                <p>{userData.name}</p>
                                                <p>{userData.email}</p>
                                                <div
                                                    style={{
                                                        borderBottom:
                                                            "1px solid #000",
                                                        height: "1px",
                                                        width: "100%",
                                                        margin: "5px 0px",
                                                    }}
                                                ></div>
                                                <p style={{ fontSize: "15px" }}>
                                                    Transaction Completed{" "}
                                                    {userData.transaction}
                                                </p>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        padding: "5px 15px",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    <p>My Profile</p>
                                                    <div
                                                        style={{ flex: "1" }}
                                                    ></div>
                                                    <p>&gt;</p>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        padding: "5px 15px",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    <p onClick={signOut}>
                                                        Sign Out
                                                    </p>
                                                    <div
                                                        style={{ flex: "1" }}
                                                    ></div>
                                                    <p>&gt;</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                                <button
                                    type="button"
                                    className="bg-[#e0eeff] text-primary rounded-md transition-all hover:bg-[#CFE5FC] false px-4 py-2 block lg:hidden"
                                    onClick={handleToggle}
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 448 512"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        id="mobile-navbar"
                        className="transition-all z-50 duration-300 opacity-100 visible lg:opacity-0 lg:invisible fixed inset-0 w-full h-full bg-white p-5 hidden"
                    >
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="bg-[#e0eeff] text-primary rounded-md transition-all hover:bg-[#CFE5FC] false px-4 py-2 flex items-center gap-2"
                                onClick={hideMobile}
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="w-full h-full flex justify-center items-center flex-col">
                            <nav>
                                <ul className="flex items-center flex-col flex-wrap gap-5">
                                    {islogin ? (
                                        <li className="transition-all hover:text-primary text-lg">
                                            <a
                                                href="/main"
                                                previewlistener="true"
                                            >
                                                HomePage
                                            </a>
                                        </li>
                                    ) : (
                                        ""
                                    )}
                                    <li className="transition-all hover:text-primary text-lg">
                                        <a href="/about" previewlistener="true">
                                            Our Purpose
                                        </a>
                                    </li>
                                    <li className="transition-all hover:text-primary text-lg">
                                        <a href="/about" previewlistener="true">
                                            About Us
                                        </a>
                                    </li>
                                    <li className="transition-all hover:text-primary text-lg">
                                        <a
                                            href="/contact"
                                            previewlistener="true"
                                        >
                                            Contact Us
                                        </a>
                                    </li>
                                    <li className="transition-all hover:text-primary text-lg">
                                        <a
                                            href="/contact"
                                            previewlistener="true"
                                        >
                                            Faq
                                        </a>
                                    </li>
                                    <li className="transition-all hover:text-primary text-lg">
                                        <a href="/main" previewlistener="true">
                                            Feedback
                                        </a>
                                    </li>
                                    {islogin ? (
                                        <li className="transition-all hover:text-primary text-lg">
                                            <a href="#" previewlistener="true">
                                                MyProfile
                                            </a>
                                        </li>
                                    ) : (
                                        <div></div>
                                    )}
                                    {islogin ? (
                                        <li
                                            className="transition-all hover:text-primary text-lg"
                                            onClick={signOut}
                                        >
                                            <a href="#" previewlistener="true">
                                                SignOut
                                            </a>
                                        </li>
                                    ) : (
                                        <div></div>
                                    )}
                                </ul>
                            </nav>
                            <div>
                                {!islogin ? (
                                    <div className="flex flex-col mt-5 items-center gap-7">
                                        <a
                                            className="bg-[#e0eeff] text-primary rounded-md transition-all hover:bg-[#CFE5FC] false px-4 py-2 flex items-center gap-2"
                                            href="/login"
                                            previewlistener="true"
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 24 24"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="Login">
                                                    <g>
                                                        <path d="M20.944,18.432a2.577,2.577,0,0,1-2.729,2.5c-2.153.012-4.307,0-6.46,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.63a1.545,1.545,0,0,0-.969-1.471,3.027,3.027,0,0,0-1.061-.095H11.755a.5.5,0,0,1,0-1c2.225,0,4.465-.085,6.688,0a2.566,2.566,0,0,1,2.5,2.67Z"></path>
                                                        <path d="M15.794,12.354a.459.459,0,0,0,.138-.312A.3.3,0,0,0,15.938,12a.29.29,0,0,0-.006-.041.455.455,0,0,0-.138-.313L12.125,7.978a.5.5,0,0,0-.707.707L14.234,11.5H3.492a.5.5,0,0,0,0,1H14.234l-2.816,2.815a.5.5,0,0,0,.707.707Z"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                            <span>Login</span>
                                        </a>
                                        <a
                                            className="bg-[#e0eeff] text-primary rounded-md transition-all hover:bg-[#CFE5FC] false px-4 py-2 flex items-center gap-2"
                                            href="/register"
                                            previewlistener="true"
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 24 24"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="Login">
                                                    <g>
                                                        <path d="M20.944,18.432a2.577,2.577,0,0,1-2.729,2.5c-2.153.012-4.307,0-6.46,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.63a1.545,1.545,0,0,0-.969-1.471,3.027,3.027,0,0,0-1.061-.095H11.755a.5.5,0,0,1,0-1c2.225,0,4.465-.085,6.688,0a2.566,2.566,0,0,1,2.5,2.67Z"></path>
                                                        <path d="M15.794,12.354a.459.459,0,0,0,.138-.312A.3.3,0,0,0,15.938,12a.29.29,0,0,0-.006-.041.455.455,0,0,0-.138-.313L12.125,7.978a.5.5,0,0,0-.707.707L14.234,11.5H3.492a.5.5,0,0,0,0,1H14.234l-2.816,2.815a.5.5,0,0,0,.707.707Z"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                            <span>Sign Up</span>
                                        </a>{" "}
                                    </div>
                                ) : (
                                    <div></div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
