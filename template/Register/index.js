import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Inputer from "@/components/inputer";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Input } from "postcss";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [mphone, setMphone] = useState("");
    const [uphone, setUphone] = useState("");
    const [isMatch, setIsMatch] = useState(false);
    const onSubmit = async (e) => {
        e.preventDefault();
        if (password === confirm) {
            try {
                const response = await fetch("/api/user/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password,
                        mphone,
                        uphone,
                    }),
                });
                const data = await response.json();
                if (response.ok) {
                    console.log("Account created successfully");
                    // localStorage.setItem("email", email);
                    window.location.href = "/verify-email";
                } else {
                    alert(data.error);
                    toast.error(data.error);
                }
            } catch (error) {
                console.log("Error creating account:", error);
            }
        } else {
            setIsMatch(true);
        }
    };
    return (
        <div>
            <Header />
            <div style={{ backgroundColor: "#fff" }}>
                <div className="flex flex-col contact-section-container">
                    <p className="header-content">Signup & Get Started Now</p>
                    <form onSubmit={onSubmit}>
                        <Inputer
                            name="Name"
                            type="string"
                            setData={setName}
                            data={name}
                            required
                        />
                        <Inputer
                            name="Email"
                            type="email"
                            setData={setEmail}
                            data={email}
                            required
                        />
                        <Inputer
                            name="Password"
                            type="password"
                            setData={setPassword}
                            data={password}
                            required
                        />
                        <Inputer
                            name="Confirm Password"
                            type="password"
                            setData={setConfirm}
                            data={confirm}
                            required
                        />
                        {isMatch ? (
                            <p style={{ color: "red", marginTop: "3px" }}>
                                Password doesn't not match
                            </p>
                        ) : (
                            ""
                        )}

                        <Inputer
                            name="Myanmar phone number"
                            type="tel"
                            setData={setMphone}
                            data={mphone}
                            required
                        />
                        <Inputer
                            name="US phone number"
                            type="tel"
                            setData={setUphone}
                            data={uphone}
                            required
                        />
                        <div
                            style={{
                                width: "fit-content",
                                margin: "auto",
                                marginTop: "30px",
                            }}
                        >
                            <button className="primary-btn" type="submit">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}
