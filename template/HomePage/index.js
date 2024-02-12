import Header from "@/components/header";
import Footer from "@/components/footer";

export default function HomePage() {
    return (
        <div>
            <Header />
            <div className="home-top-outline">
                <section className="home-top-container">
                    <div className="home-top-first">
                        <p>
                            With Escrow Myanmar you can buy and sell Myanmar
                            Kyat directly. We work to protect you and your
                            family.
                        </p>
                        <img
                            src="/images/hero-banner.png"
                            className="home-top-img"
                        />
                    </div>
                    <div className="home-top-second">
                        <div className="home-top-second-header">
                            <div className="rounded home-rounded-word-container">
                                Buy or Sell With Kyat Safely.
                            </div>
                            <p className="home-top-header-word">
                                Today Selling Market Rate <br />{" "}
                                <span style={{ color: "#387ae2" }}>
                                    USD 3390
                                </span>
                            </p>
                        </div>
                        <div className="home-top-explainer-container">
                            <div className="home-top-explainer">
                                <img
                                    src="/images/checked.svg"
                                    style={{ width: "25px" }}
                                />
                                <p style={{ marginLeft: "10px" }}>
                                    Buyer pays Escrow Myanmar
                                </p>
                            </div>
                            <div className="home-top-explainer">
                                <img
                                    src="/images/checked.svg"
                                    style={{ width: "25px" }}
                                />
                                <p style={{ marginLeft: "10px" }}>
                                    Escrow Myanmar confirmed payment
                                </p>
                            </div>
                            <div className="home-top-explainer">
                                <img
                                    src="/images/checked.svg"
                                    style={{ width: "25px" }}
                                />
                                <p style={{ marginLeft: "10px" }}>
                                    Seller transfers to buyer
                                </p>
                            </div>
                            <div className="home-top-explainer">
                                <img
                                    src="/images/checked.svg"
                                    style={{ width: "25px" }}
                                />
                                <p style={{ marginLeft: "10px" }}>
                                    Buyer inspect & confirmed the transfer
                                </p>
                            </div>
                            <div className="home-top-explainer">
                                <img
                                    src="/images/checked.svg"
                                    style={{ width: "25px" }}
                                />
                                <p style={{ marginLeft: "10px" }}>
                                    Escrow Myanmar pays seller
                                </p>
                            </div>
                        </div>
                        <button
                            className="primary-btn"
                            style={{ marginTop: "40px" }}
                        >
                            Get Started
                        </button>
                    </div>
                </section>
            </div>
            <div className="home-second-section-container">
                <section className="home-second-section">
                    <div className="home-second-header">
                        <div>
                            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                                +MMK 700,000,000
                            </p>
                            <p>Kyat Processed</p>
                        </div>
                        <div style={{ flex: "1" }}></div>
                        <div>
                            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                                +13, 000
                            </p>
                            <p>Customers Trust Escrow</p>
                        </div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <p
                            className="header-content"
                            style={{ marginTop: "30px" }}
                        >
                            Over MMK 700,000,000 protected with Escrow Myanmar
                        </p>
                        <button
                            className="primary-btn"
                            style={{ marginTop: "30px" }}
                        >
                            Learn More About Escrow
                        </button>
                        <p style={{ marginTop: "30px" }}>
                            Safeguarding both buyer and seller.
                        </p>
                    </div>
                </section>
            </div>
            <div className="home-third-section-container">
                <section className="home-third-section">
                    <p className="header-content">What Does "escrow" mean?</p>
                    <br />
                    <p>
                        An escrow is a financial and legal agreement designed to
                        protect Buyers and Sellers in a transaction. For a fee,
                        an independent third party holds payment until everyone
                        fulfills theis responsibilities in the transaction.
                    </p>
                    <br />
                    <br />
                    <p>
                        With an escrow payment, the Seller will only receive the
                        funds when the Buyer has received and accepted the
                        transfer. However, the Seller knows they will receive
                        payment because Escrow Myanmar is holding the funds on
                        their behalf.
                    </p>
                    <br />
                    <br />
                    <p className="header-content">
                        How Does Escrow Myanmar works?
                    </p>
                    <br />
                    <p>
                        Escrow Myanmar reduces the risk of fraud by acting as a
                        trusted third-party that collects, holds, and only
                        disburses Myanmar Kyat when both the Buyer and Seller
                        are setisfied.
                    </p>
                    <br />
                    <br />
                    <p>
                        Either the Buyer or Seller initiates a transaction.
                        After registering as Escrow.com, all parties agree to
                        the terms of the transaction.
                    </p>
                    <p>
                        Buyer pays Escrow Myanmar. The Buyer submits a payment
                        by approved payment method to our secure Account, Escrow
                        Myanmar verifies the payment, then the Seller is
                        notified that funds have been secured In Escrow.
                    </p>
                    <p>
                        Seller transfer to Buyer. Escrow Myanmar verifies that
                        the Buyer receives the transfer. Buyer send
                        confirmation. If not approved, the Buyer will raise a
                        dispute and enter the dispute resolution process. Escrow
                        Myanmar pays the Seller. If the merchandies is accepted,
                        Escrow Myanmar releases funds to the Seller from Escrow
                        Myanmar Account.
                    </p>
                </section>
            </div>
            <Footer />
        </div>
    );
}
