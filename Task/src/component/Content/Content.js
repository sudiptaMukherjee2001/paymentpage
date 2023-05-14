import React from 'react'
import "../Content/Content.scss"
import { FaRupeeSign } from "react-icons/fa";
import book from "../../Images/book.png"
import clock from "../../Images/clock.png"
import edu from "../../Images/edu.png"
import live from "../../Images/live.png"
import noad from "../../Images/noad.png"
import PaymentForm from './PaymentForm/PaymentForm';
function Content() {
    return (
        <>
            <div className="content">
                <div className="leftContentPart">
                    <div className="heading">
                        Access curated courses worth
                        <FaRupeeSign className="rs" />

                        18,500

                        at just
                        <span>
                            <FaRupeeSign />99
                        </span>  per year!

                    </div>
                    <div className="listItem">
                        <ul>
                            <li>
                                <img src={book} alt="" srcset="" />
                                <p>
                                    <span>
                                        100+
                                    </span>
                                    Job relevant courses

                                </p>
                            </li>
                            <li>
                                <img src={clock} alt="" srcset="" />
                                <p>
                                    <span>
                                        20,000+
                                    </span>
                                    Hours of content

                                </p>
                            </li>
                            <li>
                                <img src={live} alt="" srcset="" />
                                <p>
                                    <span>
                                        Exclusive
                                    </span>
                                    webinar access

                                </p>
                            </li>
                            <li>
                                <img src={edu} alt="" srcset="" />
                                <p>
                                    Scholarship worth
                                    <span>
                                        <FaRupeeSign />94,500
                                    </span>

                                </p>
                            </li>
                            <li>
                                <img src={noad} alt="" srcset="" />
                                <p>
                                    <span>
                                        Ad Free
                                    </span>
                                    learning experience
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <PaymentForm />
            </div>
        </>
    )
}

export default Content