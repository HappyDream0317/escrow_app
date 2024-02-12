import React, { useState } from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Inputer from "@/components/inputer";
import Texter from "@/components/texter";
export default function ContactPage() {
    const [size, setSize] = useState("");

    const handleChange = (event) => {
        setSize(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`You chose the ${size} pizza.`);
    };

    const [showAll, setShowAll] = useState(false);
    const [answersVisibility, setAnswersVisibility] = useState(
        Array(3).fill(false)
    ); // Assuming 3 questions initially

    const toggleAnswer = (index) => {
        const newAnswersVisibility = [...answersVisibility];
        newAnswersVisibility[index] = !newAnswersVisibility[index];
        setAnswersVisibility(newAnswersVisibility);
    };

    const toggleAllAnswers = () => {
        setShowAll(!showAll);
        setAnswersVisibility(answersVisibility.map(() => !showAll));
    };
    return (
        <div>
            <Header />
            <div>
                <div style={{ backgroundColor: "#fff" }}>
                    <section className="contact-section-container">
                        <div>
                            <p className="header-content">Contact Us</p>
                            <p style={{ marginTop: "10px" }}>
                                We're here to help We like feedback
                            </p>
                            <div>
                                <p
                                    style={{
                                        fontWeight: "bold",
                                        marginTop: "40px",
                                    }}
                                >
                                    What do you need help with?
                                </p>
                                <div
                                    style={{
                                        width: "fit-content",
                                        textAlign: "justify",
                                        margin: "auto",
                                        marginTop: "20px",
                                    }}
                                >
                                    <ul>
                                        <li style={{ marginTop: "20px" }}>
                                            <label style={{ fontSize: "18px" }}>
                                                <input
                                                    type="radio"
                                                    value="small"
                                                    checked={size === "small"}
                                                    onChange={handleChange}
                                                    style={{
                                                        transform: "scale(1.5)",
                                                        marginRight: "10px",
                                                    }}
                                                />
                                                I require help setting up a
                                                transition or other support
                                            </label>
                                        </li>
                                        <li style={{ marginTop: "20px" }}>
                                            <label style={{ fontSize: "18px" }}>
                                                <input
                                                    type="radio"
                                                    value="medium"
                                                    checked={size === "medium"}
                                                    onChange={handleChange}
                                                    style={{
                                                        transform: "scale(1.5)",
                                                        marginRight: "10px",
                                                    }}
                                                />
                                                I'd like to leave some feedback
                                                and improvement
                                            </label>
                                        </li>
                                        <li style={{ marginTop: "20px" }}>
                                            <label
                                                style={{
                                                    fontSize: "18px",
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    value="large"
                                                    checked={size === "large"}
                                                    onChange={handleChange}
                                                    style={{
                                                        transform: "scale(1.5)",
                                                        marginRight: "10px",
                                                    }}
                                                />
                                                I'd like to make a complaint
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Inputer name="Name" type="string" />
                            <Inputer name="Email" type="email" />
                            <Inputer name="Phone Number" type="string" />
                            <Inputer name="Transaction Number" type="string" />
                            <Texter
                                name="Feedback"
                                type="string"
                                textplacer="Please Provide Detailed Feedback On Your Issue"
                            />
                        </div>
                        <div
                            style={{ marginTop: "30px", textAlign: "justify" }}
                        >
                            <button className="primary-btn">Submit</button>
                        </div>
                    </section>
                </div>
                <div id="faq" style={{ backgroundColor: "#F0F6FE" }}>
                    <section className="contact-section-container">
                        <p className="header-content">
                            Frequently Asked Question
                        </p>
                        <br />
                        <br />
                        <div>
                            <dl className="contact-faqs">
                                <dt
                                    className="contact-faq"
                                    onClick={() => toggleAnswer(0)}
                                    style={{
                                        cursor: "pointer",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Do you keep our verification photos? Privacy
                                    Issue
                                    <div style={{ flex: "1" }}></div>
                                    <span className="plusminus">
                                        {answersVisibility[0] ? "[-]" : "[+]"}
                                    </span>{" "}
                                </dt>
                                {answersVisibility[0] && (
                                    <dd
                                        className="contact-faq"
                                        style={{ textAlign: "justify" }}
                                    >
                                        Due to costly nature to main server, we
                                        don't hold photos verifcation more than
                                        one month.
                                    </dd>
                                )}
                                <br />
                                <dt
                                    className="contact-faq"
                                    onClick={() => toggleAnswer(1)}
                                    style={{
                                        cursor: "pointer",
                                        fontWeight: "bold",
                                    }}
                                >
                                    What if I want to transfer more than $2000?
                                    <div style={{ flex: "1" }}></div>
                                    <span className="plusminus">
                                        {answersVisibility[1] ? "[-]" : "[+]"}
                                    </span>{" "}
                                </dt>
                                {answersVisibility[1] && (
                                    <dd
                                        className="contact-faq"
                                        style={{ textAlign: "justify" }}
                                    >
                                        For safety pupose, we are only allowing
                                        Zelle. If you want to transfer more than
                                        $2000, you must create multiple
                                        transition.
                                    </dd>
                                )}
                            </dl>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}
