import React, { useState } from 'react'
import "../PaymentForm/PaymentForm.scss"
import disableradiobutton from "../../../Images/disableradiobutton.png";
import enableradiobutton from "../../../Images/enableradiobutton.png"
import simpleradiobutton from "../../../Images/simpleradiobutton.png"
import payIcon from "../../../Images/payIcon.png"
import offer from "../../../Images/offer.png"
import { FaRupeeSign } from "react-icons/fa";
import { data } from "../../../util.js"
function PaymentForm() {

    const [recommed, setrecommed] = useState(true);
    const [recommedEnablefor6Mon, setrecommedEnablefor6Mon] = useState(false)
    const [recommedEnablefor3Mon, setrecommedEnablefor3Mon] = useState(false)
    const [totalPrice, setTotalPrice] = useState()
    const [priceVisible, setpricevisble] = useState(false)



    const selectPopularSubscription = (id, price) => {
        setrecommed(id === 0)
        setrecommedEnablefor6Mon(id === 1)
        setrecommedEnablefor3Mon(id === 2)
        setTotalPrice(price)
        setpricevisble(true)



    }
    console.log("price is", totalPrice);


    return (
        <>
            <div className="paymentForm">
                <div className="progrssbar">
                    <div>
                        <span className='number'>

                            1
                        </span>
                        <span className='text'>
                            Sign up
                        </span>
                    </div>
                    <div>
                        <span className='number'>
                            2
                        </span>
                        <span className='text'>
                            Subscribe
                        </span>
                    </div>
                </div>
                <div className="fromTitle">
                    Select your subscription plan
                </div>
                <div className="input">
                    <div className="expiredOffer">
                        <div className="Content">
                            <img src={disableradiobutton} alt="" srcset="" />

                            12 Months Subscripton
                        </div>
                        <div className="price">
                            <div className="totalamt">
                                Total
                                <span>
                                    <FaRupeeSign />
                                    99
                                </span>
                            </div>
                            <div className="perMonth">
                                <FaRupeeSign />8/mo
                            </div>
                        </div>

                    </div>
                    {/*RecommendedOffer and other offer  */}
                    {
                        data.map((subs, id) => {
                            return (


                                <div className={subs.id === 0 ? "recommendedOffer" : "otherOffer"} onClick={() => selectPopularSubscription(id, subs.rs)}>
                                    <div className="Content">


                                        {(recommed && subs.id === 0) || (recommedEnablefor6Mon && subs.id === 1) || (recommedEnablefor3Mon && subs.id === 2) ? <img src={enableradiobutton} alt="" srcSet="" /> : <img src={simpleradiobutton} alt="" srcSet="" />}




                                        {subs.subscriptionDetails}
                                    </div>
                                    <div className="price">
                                        <div className="totalamt">
                                            Total
                                            <span>
                                                <FaRupeeSign />
                                                {subs.rs}
                                            </span>
                                        </div>
                                        <div className="perMonth">
                                            <FaRupeeSign />{subs.perMonth}/mo
                                        </div>
                                    </div>

                                </div>

                            )
                        })
                    }
                    {/* ------------ */}

                </div>
                <div className="summaryCon">
                    <div className="subscriptionFee">
                        <span>
                            Subcription Fee
                        </span>
                        <span>
                            <FaRupeeSign />18,500
                        </span>
                    </div>
                    <div className="offer">
                        <div className="offerText">
                            <span>Limited time offer</span>
                            <div className="bottomline">

                                <img src={offer} alt="" srcset="" />
                                offer valid till 25 March 2023
                            </div>
                        </div>
                        <span>
                            -<FaRupeeSign />  {
                                priceVisible ? 18500 - totalPrice : 18321
                            }
                        </span>
                    </div>
                    <div className="finalAmt">
                        <span>
                            Total(Incl. of 18% Gst)
                        </span>
                        <span>
                            <FaRupeeSign />
                            {
                                priceVisible ? totalPrice : 179
                            }
                        </span>

                    </div>
                </div>
                <div className="proceedBtn">
                    <span className='secondary'>
                        Cancel
                    </span>
                    <span className='primary'>
                        PROCEED TO PAY
                    </span>
                </div>
                <div className="icon">
                    <img src={payIcon} alt="" srcset="" />

                </div>

            </div>
        </>
    )
}

export default PaymentForm