import React, { useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import classes from '../../styles/getAQuote.module.css';
// import {FaEnvelope, FaEnvelopeOpen, FaHome, FaUser} from "react-icons/fa";
import ip from '../../images/ip.png';

const GetAQuote = () => {

    const history = useHistory();

    const [disable, setDisable] = useState(true);
    const [disable2, setDisable2] = useState(true);

    const [headFlag, setHeadFlag] = useState(true);
    const [flag, setFlag] = useState(false);
    const [flagOne, setFlagOne] = useState(true);
    const [flagTwo, setFlagTwo] = useState(true);
    const [flagOptional, setFlagOptional] = useState(false);
    const [flagThree, setFlagThree] = useState(false);
    const [flagFour, setFlagFour] = useState(false);
    const [flagFive, setFlagFive] = useState(false);
    const [flagSix, setFlagSix] = useState(false);

    const[flagElectronic, setFlagElectronic] = useState(false);
    const[flagVehicle, setFlagVehicle] = useState(false);

    const[flagYearly, setFlagYearly] = useState(true);
    const[flagMonthly, setFlagMonthly] = useState(false);

    const [zipcode, setZipcode] = useState("");
    let count = 0;

    const handleBuyBtn = () => {
        history.push('login');
    }

    const handleHead = () => {
        setHeadFlag(false);
        setFlag(true);
    }

    const handleBI = (event) => {
        if (event.target.value === 'business'){
            setFlagTwo(true);
            setFlagOptional(false);
        }
        else{
            setFlagOptional(true);
            setFlagTwo(false);

        }
    }

    const handleService = (event) => {
        if(event.target.value === 'car' || event.target.value === 'laptopComp' || event.target.value === 'mobileTablet' || event.target.value === 'boat'){
            count++;
        }
        if(event.target.value === 'fire' || event.target.value === 'theft'){
            count++;
        }
        if(event.target.value === 'col'){
            count++;
        }
        if(count === 2){
            setDisable(false);
        }
    }

    const handleBtn1 = () => {
        setFlagOne(false);
        setFlagThree(true);
    }

    const handleBtn2 = () => {
        setFlagFour(true);
        setFlagThree(false);

        
    }
    const handleZip = (event) => {
        setZipcode(event.target.value);
        if(zipcode.length === 4){
            setDisable2(false);
        }
    }

    const handlebtn3 = () => {
        setFlagFour(false);
        setFlagFive(true);
    }

    const handleProductType = (event) => {

        if(event.target.value === "car" || event.target.value === "bike" || event.target.value === "boat" || event.target.value === "auto"){
            console.log(flagVehicle);
            console.log(flagElectronic);
            setFlagVehicle(true);
            setFlagElectronic(false);
            console.log(flagVehicle);
            console.log(flagElectronic);
        }
        else{
            setFlagElectronic(true);
            setFlagVehicle(false);
        }

    }

    const handlebtn4 = () => {
        setFlagFive(false);
        setFlagSix(true);
    }

    const premiumYearly = () => {
        setFlagYearly(true);
        setFlagMonthly(false);
    }

    const premiumMonthly = () => {
        setFlagYearly(false);
        setFlagMonthly(true); 
    }

    const handleBackbutton = () => {
        setFlagSix(false);
        setFlagFive(true);
        // setFlagYearly(false);
        // setFlagMonthly(false);

    }

    const handleBackZip = () => {
        setFlagOne(true);
        setFlagTwo(false);
        setFlagThree(false);
    }

    const handleBackPersonal = () => {
        setFlagFour(false);
        setFlagThree(true);
    }

    const handleBackProduct = () => {
        setFlagFour(true);
        setFlagFive(false);
    }

    return(
        <>
        <section className={classes.contentStart}>
            {headFlag && 
            <div className={classes.outerDiv}>
                <h2 className={classes.heading}>Get promising insurance with just few clicks </h2>
                    <br />
                    <div>
                        <h5>Aasaan Premium provides premium on every product you need in</h5>
                            <h5> just 5 minutes</h5>
                        <br />
                    </div>
                    <div className={classes.paraContent}>
                        <div>
                            <ul style={{color: "gray"}}>
                                <li>Anytime Anywhere</li>
                                <li>Save time and energy</li>
                                <li>24*7 Availability</li>
                            </ul>
                        </div>
                        <div className={classes.getAQuote}
                        // onClick = {(e) => {history.push('/login')}} 
                        onClick = {handleHead}
                        >
                            <h5>Get a Quote →</h5>
                        </div>
                        
                    </div>
                
                
            </div>}

            {flag && <div className={classes.secondPage}>
                
                <img src={ip} alt="Insurance Premium" />
                
                {flagOne &&
                
                <div className={classes.types}>
                    
                        <h2 
                        className={classes.heading}
                        >Insurance Details</h2> <br />
                    <h6 className={classes.subheading}>Type of Insurance</h6>
                    <select name="insuranceDetails" id="insuranceDetails" onChange={handleBI}>
                        <option disabled>--Select an option--</option>
                        <option value="general" >General Insurance</option>
                        <option value="vehicle" >Vehicle Insurance</option>
                        <option selected value="business">Business Insurance</option>
                        <option value="personal" >Personal Insurance</option>
                        <option value="health" >Health Insurance</option>
                        <option value="financial" >Financial Insurace</option>
                        <option value="property" >Property Insurace</option>

                    </select>
                    <br />

                    {
                        flagOptional && 
                        <div className={classes.sorryPage}>
                            <p>Sorry! We don't provide insurance on the selected option :(</p>
                            <h5>You can visit <NavLink to="/insurance">Insurance Summary</NavLink> for more details.</h5>
                            
                        </div>
                    }
                    {flagTwo &&
                    <>
                        <h6 className={classes.subheading}>Protection Options</h6>
                        
                        <select name="serviceProvided" id="serviceProvided" 
                        onChange={handleService}
                        >
                            <option disabled value>--Select an option--</option>
                            <option disabled value="general" >General Liability</option>
                            {/* <option value="bpo" >Business Owner's Policy</option> */}
                            <option value="col" selected defaultValue>Commercial Property Insurance</option>
                            <option disabled value="compensation" >Workers' Compensation</option>
                            <option disabled value="prof" >Professional Liability</option>

                        </select>
                        <br />
                        
                        <h6 className={classes.subheading}>Product type </h6>
                        
                        <select name="serviceProvided" id="serviceProvided" 
                        onChange={handleService}
                        >
                            <option disabled selected value>--Select an option--</option>
                            <option value="car" >Car/Two Wheeler</option>
                            <option value="laptopComp" >Laptop / Computer</option>
                            <option value="mobileTablet" >Mobile / Tablet </option>
                            <option value="boat" >Boat </option>
                            <option value="home" >Home </option>

                        </select>
                        <br />

                       
                        <h6 className={classes.subheading}>Cause of Risks</h6>
                        <select name="serviceProvided" id="serviceProvided" 
                        onChange={handleService}
                        >
                            <option disabled selected value>--Select an option--</option>
                            <option value="financial" disabled>Financial</option>
                            <option value="fire" >Fire</option>
                            <option value="theft" >Theft</option>
                            <option value="natural" disabled>Human Resourse</option>

                        </select>
                        <br />
                        <button className={classes.btn1} disabled = {disable} onClick={handleBtn1}>Next →</button>
                    </>
                   
                    }
                </div>}

                {flagThree &&
                <div className={classes.details}>
                    <h2 className={classes.heading}>Enter Zip</h2>
                    <br />
                    <input type="number" name="zipcode" id="zipcode" min={5} max={5} value={zipcode} 
                    onChange={handleZip} placeholder="Zip Code"/>
                
                    <br />
                    <div className={classes.divButton}>
                        <button className={classes.backButton} onClick={handleBackZip}>Back</button>
                        <button className={classes.btn2} disabled = {disable2} onClick={handleBtn2}>Next →</button>
                    </div>

                </div>

                }

                {flagFour &&
                    <div className={classes.personalInfo}>
                        <div className={classes.innerDiv}>
                            <h2 className={classes.heading}>Personal Information</h2>
                            
                        </div>
                        <div className={classes.innerDiv}>
                            {/* <label htmlFor="fname">First Name: </label> */}
                            <input autoComplete="off" type="text" name="fname" id="fname" placeholder="First Name" required/>
                            {/* <label htmlFor="lname">Last Name: </label> */}
                            <input autoComplete="off" type="text" name="lname" id="lname" placeholder="Last Name" required/>
                        </div>
                        
                        <div className={classes.innerDiv}>
                            <input autoComplete="off" type="email" name="email" id="email" placeholder="Email address" required/>
                            <input autoComplete="off" type="number" name="phone" id="phone" placeholder="Phone number " required/>
                        </div>
                        
                        
                        
                        <div className={classes.maritalStatus}>
                            <div className={classes.innerDiv}>
                            
                                <label htmlFor="marital">Marital Status:</label>
                                
                                <label htmlFor="marital">Single</label>
                                <input type="radio" name="marital" id="marital" required/>
                                <label htmlFor="marital">Married</label>
                                <input type="radio" name="marital" id="marital" required/>
                                
                            </div>
                            
                        </div>
                        
                        <div>
                            <div className={classes.innerDiv}>
                                <input type="textarea" name="address" id="address" placeholder="Full Address" required/>
                            </div>
                           
                            <div className={classes.innerDiv}>
                                  <input type="text" name="City" id="City" placeholder="City"/>
                                <input type="text" name="state" id="state" placeholder="State/Province"/>
                            </div>
                        </div>

                        <div className={classes.checkbox}>
                            <input type="checkbox" id="check"/>
                            <label htmlFor="check">I agree that all the information entered is correct</label>
                        </div>
                        
                       <div className={classes.divButton}>
                            <button className={classes.backButton} onClick={handleBackPersonal}>Back</button>

                            <button className={classes.btn3}
                                onClick={handlebtn3}>Continue</button>
                       </div>



                    </div>

                }

                {flagFive&& 
                    <div className={classes.assetDetails}>
                        <div className={classes.innerDiv}>
                            <h2 className={classes.heading}>Product Details</h2><br />
                        </div>

                        <div className={classes.innerDiv}>
                            <div>
                                <label htmlFor="">Product Type: </label>
                                <select name="productType" id="productType" 
                            onChange={handleProductType}
                            >
                                    <option disabled selected value>--Select an option--</option>
                                    <option value="car" >Car</option>
                                    <option value="bike" >Bike</option>
                                    <option value="auto" >Auto</option>
                                    <option value="boat" >Boat </option>
                                    <option value="laptop" >Laptop</option>
                                    <option value="computer" >Computer</option>
                                    <option value="mobile" >Mobile</option>
                                    <option value="tablet" >Tablet </option>

                                </select>
                            </div>
                      
                        </div>

                        {(flagElectronic || flagVehicle) &&
                        <>
                            <div className={classes.innerDiv}>
                                <div>
                                    <label htmlFor="">Product Make: </label>
                                    {flagElectronic &&
                                        <select name="productMake" id="productMake" 
                                // onChange={handleProductMake}
                                >
                                        <option disabled selected value>--Select an option--</option>
                                        <option value="Lenovo" >Lenovo</option>
                                        <option value="Asus" >Asus</option>
                                        <option value="Apple" >Apple</option>
                                        <option value="Sony" >Sony </option>
                                        <option value="Microsoft" >Microsoft</option>
                                        <option value="Nokia" >Nokia</option>
                                        <option value="Dell" >Dell</option>
                                        <option value="Acer" >Acer </option>

                                    </select>}
                                    {flagVehicle &&
                                        <select name="productMake" id="productMake" 
                                // onChange={handleProductMake}
                                >
                                        <option disabled selected value>--Select an option--</option>
                                        <option value="Ford" >Ford</option>
                                        <option value="Chevrolet" >Chevrolet</option>
                                        <option value="Honda" >Honda</option>
                                        <option value="Nissan" >Nissan </option>
                                        <option value="Toyota" >Toyota</option>
                                        <option value="Volkswagen" >Volkswagen</option>
                                        <option value="Mahindra" >Mahindra</option>
                                        <option value="Hyundai" >Hyundai </option>

                                    </select>}
                                </div>
                        
                            </div>

                            <div className={classes.innerDiv}>
                                    <label htmlFor="productModel">Product Model: </label>
                                    <input type="text" autoComplete="off" placeholder="Eg: Yamaha MT-15" required/>
                            </div>
                            
                        </>
                        }
                        <div className={classes.innerDiv}>
                            <label htmlFor="yearOfPurchase">Year of Purchase: </label>
                            <input type="date" name="yearOfPurchase" id="yearOfPurchase" />
                        </div>
                        <div className={classes.innerDiv}>
                            <label htmlFor="purchaseValue">Purchase Value: </label>
                            <select name="purchaseValue" id="purchaseValue" 
                                // onChange={handlePurchaseValue}
                                >
                                        <option disabled selected value>--Select an option--</option>
                                        <option value="lessThan10" >Less than 10,000</option>
                                        <option value="10To25" >10,000 - 25,000</option>
                                        <option value="25To50" >25,000 - 50,000</option>
                                        <option value="50To80" >50,000 - 80,000 </option>
                                        <option value="80To1Lakh" >80,000 - 1,00,000</option>
                                        <option value="above1Lakh" >Greater Than 1,00,000</option>

                                    </select>
                        </div>
                        <div className={classes.divButton}>
                            <button className={classes.backButton} onClick={handleBackProduct}>Back</button>
                        
                            <button className={classes.btn4}
                            onClick={handlebtn4}>Next</button>
                        </div>

                    </div>

                }

                {
                    flagSix && 
                    <div className={classes.premium}>
                        <div className = {classes.innerDiv}>
                            <h2 className={classes.heading}>Premium Amount </h2>
                        </div>
                        
                        <div className = {classes.innerDiv}>
                            <div className={classes.radioDiv}>
                                <div>
                                <input type="radio" name="monthlyOrYearly" id="monthlyOrYearly" defaultChecked onClick={premiumYearly}/>
                                <label htmlFor="monthlyOrYearly">Per Year</label>
                                </div>
                                
                                <div>
                                <input type="radio" name="monthlyOrYearly" id="monthlyOrYearly" onClick={premiumMonthly}/>
                                <label htmlFor="monthlyOrYearly">Per Month</label>
                                </div>
                            </div>
                            
                    
                            
                        </div>

                        {flagYearly && <div className = {classes.innerDiv}>
                            <div className = {classes.innerHeading}>
                                <h3>₹ 10,800/year </h3><h5>₹ 12,000/year</h5>
                            </div>
                            
                            <h4 style={{textAlign: "center"}}>with Deductible of ₹1500</h4>    
                            <div className = {classes.divButton}>
                                <button className={classes.backButton} onClick={handleBackbutton}>Back</button>
                                <button className = {classes.buyBtn} onClick={handleBuyBtn}>Buy Plan</button>
                            </div>

                        </div>}

                        {flagMonthly && <div className = {classes.innerDiv}>
                            <div className = {classes.secondInnerHeading}>
                                <h3>₹ 1,000/month </h3>
                                <p>You can avail 10% discount on buying yearly insurance</p>
                            </div>
                            <h4 style={{textAlign: "center"}}>with Deductible of ₹ 1500</h4>
                            <br />
                            <div className = {classes.divButton}>
                                <button className={classes.backButton} onClick={handleBackbutton}>Back</button>
                                <button className = {classes.buyBtn} onClick={handleBuyBtn}>Buy Plan</button>
                            </div>

                        </div>}


                    </div>
                }

            </div>}
            
        </section>
        </>
    )
}

export default GetAQuote;