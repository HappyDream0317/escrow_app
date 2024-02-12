import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function VerifyPage() {
    const router = useRouter();
    const { token } = router.query;

    useEffect(() => {
        // Retrieve the token from the query parameters
        console.log(token);

        if (token) {
            verifyUser(token);
        }
    }, [token]);

    const verifyUser = async (token) => {
        try {
            const response = await fetch("/api/user/verify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token }),
            });
            const data = await response.json();
            if (response.ok) {
                toast.success("Verified Successfully!");
                window.location.href = "/main";
            } else {
                toast.error(data.error);
                if (data.error === "Already Verified!") {
                    setTimeout(function () {
                        window.location.href = "/";
                    }, 3000);
                }
                // Handle error logic here
            }
        } catch (error) {
            console.log("Error creating account:", error);
            // Handle error logic here
        }
    };

    const resendLink = async () => {
        const email = localStorage.getItem("email");
        if (!email || email === "") {
            toast.error("Login firstly");
        }
        try {
            const response = await fetch("/api/user/resend", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: " ", email, password: " " }),
            });
            const data = await response.json();
            if (response.ok) {
                toast.success("Verify link sent successfully.");
            } else {
                toast.error(data.error);
            }
        } catch (error) {
            console.log("Error creating account:", error);
        }
    };
    return (
        <div className="verify-container">
            <div className="verify-section">
                <div>
                    <p className="verify-content">Verify your email.</p>
                    <button
                        className="primary-btn"
                        style={{ marginTop: "30px" }}
                        onClick={resendLink}
                    >
                        Resend Verify Link
                    </button>
                </div>
            </div>
        </div>
    );
}
