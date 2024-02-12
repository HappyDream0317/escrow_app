import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Inputer from "@/components/inputer";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Input } from "postcss";

export default function loginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = async (e) => {
        e.preventDefault();
        fetch("/api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
            .then(async (response) => {
                const data = await response.json();
                if (response.ok) {
                    var jwt_token = data.token;
                    localStorage.setItem("jwt_token", jwt_token);
                    localStorage.setItem("email", email);
                    if (data.user.status === false) {
                        window.location.href = "/verify-email";
                    } else {
                        window.location.href = "/main";
                    }
                } else {
                    toast.error(data.error);
                }
            })
            .catch((error) => {
                console.log("error", error);
            });
    };
    return (
        <div>
            <Header />
            <div style={{ backgroundColor: "#fff" }}>
                <div
                    className="flex flex-col contact-section-container"
                    style={{ height: "calc(100vh - 92px)" }}
                >
                    <p className="header-content">Welcome Back</p>
                    <form onSubmit={onSubmit}>
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
                        <div
                            style={{
                                width: "fit-content",
                                margin: "auto",
                                marginTop: "30px",
                            }}
                        >
                            <button className="primary-btn" type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}
