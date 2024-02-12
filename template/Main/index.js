import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const data = [
    {
        id: 0,
        src: "/images/CB_bank_logo.png",
        label: "CB Bank Special",
    },
    {
        id: 1,
        src: "/images/KBZ_bank_logo.png",
        label: "KBZ Bank Special",
    },
    {
        id: 2,
        src: "/images/YOMA_bank_logo.png",
        label: "Yoma Bank Special",
    },
    {
        id: 3,
        src: "/images/AYA_bank_logo.png",
        label: "AYA Bank Special",
    },
];

export default function MainPage() {
    // for dropdown
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(data);
    // for transaction input
    const [buyer, setBuyer] = useState("seller");
    const [amount, setAmount] = useState(0);
    const [rate, setRate] = useState(0);
    const [fee, setFee] = useState(0);
    const [feeVal, setFeeVal] = useState(0);
    const [receive, setReceive] = useState(0);
    const [selectedItem, setSelectedItem] = useState({
        id: 0,
        src: "/images/CB_bank_logo.png",
        label: "CB Bank Special",
    });
    const [mytransaction, setMytransaction] = useState([
        {
            src: "/images/transactions.jpg",
            name: "Jhon Doe",
            completed: 10,
            id: "#F9FCFF",
            date: "31 Jan, 2024",
            currency: "USD",
            value: "250",
            rate: "3380",
            status: "success",
        },
        {
            src: "/images/transactions.jpg",
            name: "Jhon Doe",
            completed: 10,
            id: "#F9FCFF",
            date: "31 Jan, 2024",
            currency: "USD",
            value: "250",
            rate: "3380",
            status: "success",
        },
        {
            src: "/images/transactions.jpg",
            name: "Jhon Doe",
            completed: 10,
            id: "#F9FCFF",
            date: "31 Jan, 2024",
            currency: "USD",
            value: "250",
            rate: "3380",
            status: "success",
        },
    ]);

    const [sellertransaction, setSellertransaction] = useState([
        {
            src: "/images/buyer-1.jpg",
            name: "Jhon Doe",
            completed: 10,
            id: "#F9FCFF",
            date: "31 Jan, 2024",
            currency: "USD",
            value: "250",
            rate: "3380",
        },
        {
            src: "/images/buyer-1.jpg",
            name: "Jhon Doe",
            completed: 10,
            id: "#F9FCFF",
            date: "31 Jan, 2024",
            currency: "USD",
            value: "250",
            rate: "3380",
        },
        {
            src: "/images/buyer-1.jpg",
            name: "Jhon Doe",
            completed: 10,
            id: "#F9FCFF",
            date: "31 Jan, 2024",
            currency: "USD",
            value: "250",
            rate: "3380",
        },
    ]);

    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem("jwt_token");
            await verify_token(token);
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
                if (data.success === false) {
                    window.location.href = "/login";
                }
            }
        } catch (error) {
            console.log("Error creating account:", error);
            // Handle error logic here
        }
    };

    const toggleDropdown = () => {
        var div = document.getElementById("dropwdown");
        if (div.style.display === "none") {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    };

    const handleItemClick = (id) => {
        selectedItem == setSelectedItem(items[id]);
        var div = document.getElementById("dropwdown");
        div.style.display = "none";
    };

    const handleTxType = (e) => {
        setBuyer(e.target.value);
        if (e.target.value === "seller") {
            setFee(0);
            var feeValue = amount * rate * 0;
            setFeeVal(feeValue);
            setReceive(amount * rate);
        } else {
            setFee(0.5);
            var feeValue = amount * rate * 0.005;
            setFeeVal(feeValue);
            setReceive(amount * rate + feeValue);
        }
    };
    const handleAmount = (e) => {
        if (e.target.value <= 2000) {
            setAmount(e.target.value);
            var feeValue = (e.target.value * rate * fee) / 100;
            setFeeVal(feeValue);
            setReceive(e.target.value * rate + feeValue);
        }
    };
    const handleRate = (e) => {
        if (e.target.value <= 3400) {
            setRate(e.target.value);
            var feeValue = (amount * e.target.value * fee) / 100;
            setFeeVal(feeValue);
            setReceive(amount * e.target.value + feeValue);
        }
    };
    return (
        <div>
            <Header />
            <div style={{ backgroundColor: "#fff", padding: "30px 0" }}>
                <div
                    className="main-section-container"
                    style={{ backgroundColor: "#F9FCFF" }}
                >
                    <div className="main-calculator-cointainer">
                        <div className="main-calculator">
                            <p style={{ marginBottom: "20px" }}>
                                Recommended Selling Rate : 3400 MMK
                            </p>
                        </div>
                        <div className="main-action-container">
                            {/* for selecting buy/sell */}
                            <div className="main-individual-part-container">
                                <div className="main-individual-first">
                                    <select
                                        onChange={handleTxType}
                                        className="main-selction"
                                        value={buyer}
                                    >
                                        <option
                                            value="seller"
                                            className="main-selection-option"
                                        >
                                            I am selling
                                        </option>
                                        <option value="buyer">
                                            I am buying
                                        </option>
                                    </select>
                                </div>
                                <div className="main-individual-height-line"></div>
                                <div className="main-individual-second main-individual-content">
                                    USD with Zelle
                                </div>
                                <div className="main-individual-third main-individual-content">
                                    -
                                </div>
                            </div>
                            {/* input amount */}
                            {/* for selecting buy/sell */}
                            <div className="main-individual-part-container">
                                <div className="main-individual-first main-individual-content">
                                    For the amount of
                                </div>
                                <div className="main-individual-height-line"></div>
                                <div className="main-individual-second">
                                    <input
                                        className="main-individual-input"
                                        type="number"
                                        max="2000"
                                        value={amount}
                                        onChange={handleAmount}
                                    />
                                </div>
                                <div className="main-individual-height-line"></div>
                                <div className="main-individual-third main-individual-content">
                                    USD
                                </div>
                            </div>
                            {/* input Rate */}
                            <div className="main-individual-part-container">
                                <div className="main-individual-first main-individual-content main-individual-with-flag">
                                    Rate
                                    <div style={{ flex: "1" }}></div>
                                    <img
                                        className="main-manmar-flag"
                                        src="/images/myanmar-flag-icon.png"
                                    />
                                </div>
                                <div className="main-individual-height-line"></div>
                                <div className="main-individual-second">
                                    <input
                                        className="main-individual-input"
                                        type="number"
                                        max="2000"
                                        value={rate}
                                        onChange={handleRate}
                                    />
                                </div>
                                <div className="main-individual-height-line"></div>
                                <div className="main-individual-third main-individual-content">
                                    MMK
                                </div>
                            </div>
                            {/* input Fee */}
                            <div className="main-individual-part-container">
                                <div className="main-individual-first main-individual-content main-individual-with-flag">
                                    {fee}% Fees
                                    <div style={{ flex: "1" }}></div>
                                    <img
                                        className="main-manmar-flag"
                                        src="/images/myanmar-flag-icon.png"
                                    />
                                </div>
                                <div className="main-individual-height-line"></div>
                                <div className="main-individual-second">
                                    <input
                                        className="main-individual-input"
                                        type="number"
                                        max="2000"
                                        value={feeVal}
                                        disabled
                                    />
                                </div>
                                <div className="main-individual-height-line"></div>
                                <div className="main-individual-third main-individual-content">
                                    MMK
                                </div>
                            </div>
                            {/* input Receive */}
                            <div className="main-individual-part-container">
                                <div className="main-individual-first main-individual-content main-individual-with-flag">
                                    Receive
                                    <div style={{ flex: "1" }}></div>
                                    <img
                                        className="main-manmar-flag"
                                        src="/images/myanmar-flag-icon.png"
                                    />
                                </div>
                                <div className="main-individual-height-line"></div>
                                <div className="main-individual-second">
                                    <input
                                        className="main-individual-input"
                                        type="number"
                                        max="2000"
                                        value={receive}
                                        disabled
                                    />
                                </div>
                                <div className="main-individual-height-line"></div>
                                <div className="main-individual-third main-individual-content">
                                    MMK
                                </div>
                            </div>
                            {/* input Receiving with */}
                            <div className="main-individual-part-container">
                                <div className="main-individual-first main-individual-content">
                                    Receiving With
                                </div>
                                <div className="main-individual-height-line"></div>
                                <div className="main-individual-second">
                                    <div className="dropdown">
                                        <div
                                            className="dropdown-header"
                                            onClick={toggleDropdown}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <img
                                                    src={selectedItem.src}
                                                    className="bank-icon"
                                                />
                                                <span
                                                    style={{
                                                        marginTop: "5px",
                                                        marginLeft: "10px",
                                                    }}
                                                >
                                                    {selectedItem.label}
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            id="dropwdown"
                                            className={`dropdown-body ${
                                                isOpen && "open"
                                            }`}
                                        >
                                            {items.map((item) => (
                                                <div
                                                    className="dropdown-item"
                                                    onClick={(e) =>
                                                        handleItemClick(item.id)
                                                    }
                                                    id={item.id}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                        }}
                                                    >
                                                        <img
                                                            src={item.src}
                                                            className="bank-icon"
                                                        />
                                                        <span
                                                            style={{
                                                                marginTop:
                                                                    "5px",
                                                                marginLeft:
                                                                    "10px",
                                                            }}
                                                        >
                                                            {item.label}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="main-individual-height-line"></div>
                                <div
                                    className="main-individual-third main-individual-content"
                                    style={{ display: "flex" }}
                                >
                                    <img
                                        src="/images/check_icon.png"
                                        className="check-img"
                                    />
                                </div>
                            </div>
                            {/* for user input */}
                            <div className="main-individual-part-container">
                                <div className="main-individual-first main-individual-user-content">
                                    Receiving Special Account Name
                                </div>
                                <div className="main-individual-height-line"></div>
                                <div className="main-individual-second">
                                    <input
                                        className="main-individual-input"
                                        type="string"
                                    />
                                </div>
                            </div>
                            <div className="main-individual-part-container">
                                <div className="main-individual-first main-individual-user-content">
                                    Receiving Special Account Number
                                </div>
                                <div className="main-individual-height-line"></div>
                                <div className="main-individual-second">
                                    <input
                                        className="main-individual-input"
                                        type="number"
                                        max="2000"
                                    />
                                </div>
                            </div>
                            <div className="main-individual-part-container">
                                <div className="main-individual-first main-individual-user-content">
                                    Myanmar Phone Number
                                </div>
                                <div className="main-individual-height-line"></div>
                                <div className="main-individual-second">
                                    <input
                                        className="main-individual-input"
                                        type="number"
                                        max="2000"
                                    />
                                </div>
                            </div>
                            <div className="main-individual-part-container">
                                <div className="main-individual-first main-individual-user-content">
                                    USA Phone Number
                                </div>
                                <div className="main-individual-height-line"></div>
                                <div className="main-individual-second">
                                    <input
                                        className="main-individual-input"
                                        type="number"
                                        max="2000"
                                    />
                                </div>
                            </div>
                            <button
                                className="primary-btn"
                                style={{ marginTop: "20px" }}
                            >
                                Start Transaction
                            </button>
                        </div>
                    </div>
                    {/* my transactions part */}
                    <div className="main-mytransaction-container">
                        <p className="header-content">My Transactions</p>
                        <div
                            style={{
                                overflowX: "auto",
                                width: "100%",
                                textAlign: "center",
                            }}
                        >
                            <table>
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>ID</th>
                                        <th>Created On</th>
                                        <th>Currency</th>
                                        <th>Amount</th>
                                        <th>Rate</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mytransaction.map(
                                        ({
                                            src,
                                            name,
                                            completed,
                                            id,
                                            date,
                                            currency,
                                            value,
                                            rate,
                                            status,
                                        }) => (
                                            <tr key={id}>
                                                <td className="main-table-user-container">
                                                    <img
                                                        src={src}
                                                        className="main-user-image"
                                                    />
                                                    <div className="main-table-user-inf">
                                                        <div
                                                            style={{
                                                                justifyContent:
                                                                    "center",
                                                                height: "fit-content",
                                                            }}
                                                        >
                                                            <p>{name}</p>
                                                            <p>
                                                                {completed}{" "}
                                                                completed
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{id}</td>
                                                <td>{date}</td>
                                                <td>{currency} with Zelle</td>
                                                <td>${value}</td>
                                                <td>{rate}</td>
                                                <td
                                                    style={{ color: "#3898E2" }}
                                                >
                                                    {status}
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                            <button
                                className="primary-btn"
                                style={{ marginBottom: "20px" }}
                            >
                                View All Transactions
                            </button>
                        </div>
                    </div>
                    {/* seller transaction part */}
                    <div
                        className="main-mytransaction-container"
                        style={{ paddingTop: "20px" }}
                    >
                        <p
                            className="header-content"
                            style={{
                                fontSize: "25px",
                                marginLeft: "20px",
                            }}
                        >
                            Sellers Marketplace
                        </p>
                        <div
                            style={{
                                overflowX: "auto",
                                width: "100%",
                                textAlign: "center",
                            }}
                        >
                            <table>
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>ID</th>
                                        <th>Created On</th>
                                        <th>Currency</th>
                                        <th>Amount</th>
                                        <th>Rate</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sellertransaction.map(
                                        ({
                                            src,
                                            name,
                                            completed,
                                            id,
                                            date,
                                            currency,
                                            value,
                                            rate,
                                        }) => (
                                            <tr key={id}>
                                                <td className="main-table-user-container">
                                                    <img
                                                        src={src}
                                                        className="main-user-image"
                                                    />
                                                    <div className="main-table-user-inf">
                                                        <div
                                                            style={{
                                                                justifyContent:
                                                                    "center",
                                                                height: "fit-content",
                                                            }}
                                                        >
                                                            <p>{name}</p>
                                                            <p>
                                                                {completed}{" "}
                                                                completed
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{id}</td>
                                                <td>{date}</td>
                                                <td>{currency} with Zelle</td>
                                                <td>${value}</td>
                                                <td>{rate}</td>
                                                <td>
                                                    <button
                                                        className="primary-btn"
                                                        style={{
                                                            backgroundColor:
                                                                "transparent",
                                                            color: "#3898E2",
                                                            fontWeight:
                                                                "normal",
                                                            fontSize: "15px",
                                                        }}
                                                    >
                                                        accept
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                            <button
                                className="primary-btn"
                                style={{ marginBottom: "20px" }}
                            >
                                View All Transactions
                            </button>
                        </div>
                    </div>
                    {/* buyer transaction part */}
                    <div
                        className="main-mytransaction-container"
                        style={{ paddingTop: "20px" }}
                    >
                        <p
                            className="header-content"
                            style={{
                                fontSize: "25px",
                                marginLeft: "20px",
                            }}
                        >
                            Buyers Marketplace
                        </p>
                        <div
                            style={{
                                overflowX: "auto",
                                width: "100%",
                                textAlign: "center",
                            }}
                        >
                            <table>
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>ID</th>
                                        <th>Created On</th>
                                        <th>Currency</th>
                                        <th>Amount</th>
                                        <th>Rate</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sellertransaction.map(
                                        ({
                                            src,
                                            name,
                                            completed,
                                            id,
                                            date,
                                            currency,
                                            value,
                                            rate,
                                        }) => (
                                            <tr key={id}>
                                                <td className="main-table-user-container">
                                                    <img
                                                        src={src}
                                                        className="main-user-image"
                                                    />
                                                    <div className="main-table-user-inf">
                                                        <div
                                                            style={{
                                                                justifyContent:
                                                                    "center",
                                                                height: "fit-content",
                                                            }}
                                                        >
                                                            <p>{name}</p>
                                                            <p>
                                                                {completed}{" "}
                                                                completed
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{id}</td>
                                                <td>{date}</td>
                                                <td>{currency} with Zelle</td>
                                                <td>${value}</td>
                                                <td>{rate}</td>
                                                <td>
                                                    <button
                                                        className="primary-btn"
                                                        style={{
                                                            backgroundColor:
                                                                "transparent",
                                                            color: "#3898E2",
                                                            fontWeight:
                                                                "normal",
                                                            fontSize: "15px",
                                                        }}
                                                    >
                                                        accept
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                            <button
                                className="primary-btn"
                                style={{ marginBottom: "20px" }}
                            >
                                View All Transactions
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
