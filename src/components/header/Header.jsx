import { useState } from 'react'
import quickLinksData from './quickLinksData'

export default function Header() {

    const [pass, setPass] = useState(false)
    const passShow = () => {
        setPass(!pass)
    }

    const [header, setHeader] = useState(false);
    const headerPosition = () => {
        if (window.scrollY >= 84) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }


    const [customerID, setCustomerID] = useState(true)

    const handleChange = (e) => {
        const isValidInput = /^[0-9ABC-]*$/.test(e.target.value);

        if (isValidInput && e.target.value.length <= 10) {
            setCustomerID(isValidInput)
        } else {
            setCustomerID(false)
        }

    }

    // const [phoneNum, setPhoneNum] = useState(true)

    // const isPhoneNum = (e) => {
    //     const isValidNum = /^[0-9-+ ]*$/.test(e.target.value);

    //     if (isValidNum && e.target.value.length <= 10) {
    //         setPhoneNum(isValidNum)
    //     } else {
    //         setPhoneNum(false)
    //     }
    // }

    // const [passStore, setPassStore] = useState('')
    // const [passCheck, setPassCheck] = useState('')
    
    // const isPass = (e) => {
    //     setPassStore(e.target.value)
    // }
    // console.log(passStore);

    // const isPassSame = (e) => {
    //     setPassCheck(e.target.value)
    // }
    // console.log(passCheck);

    // if (isPass === isPassSame) {
    //     console.log('Same')
    // } else {
    //     console.log('Not Same')
    // }




    window.addEventListener('scroll', headerPosition)

    return (
        <>
            <header className="header-sec">
                <div className="header-top">
                    <div className="container">
                        <div className="header-top-wrapper">
                            <div className="header-top-left">
                                <div className="header-t-l-logo-box">
                                    <a href="#">
                                        <img src="assets/headerAssets/logo.svg" alt="Logo" />
                                        <p>Surya</p>
                                    </a>
                                </div>
                            </div>
                            <div className="header-top-mid">
                                <div className="header-t-m-search-area">
                                    <i class="fa-solid fa-magnifying-glass" style={{ color: '#ffffff' }}></i>
                                    <input type="text" placeholder="Search For Services..." />
                                </div>
                            </div>
                            <div className="header-top-right">
                                <form className="header-t-r-form">
                                    <div className={customerID ? 'header-t-r-form-input header-t-r-id-input' : 'header-t-r-form-input header-t-r-id-input incorrect'}>
                                        <i class="fa-solid fa-user" style={customerID ? { color: '#afafaf' } : { color: '#ff0000' }}></i>
                                        <input type="text" placeholder="Customer ID" onChange={handleChange} />
                                    </div>
                                    <div className="header-t-r-form-input header-t-r-pass-input">
                                        <i class="fa-solid fa-key" style={{ color: '#afafaf' }}></i>
                                        <input type={pass ? "text" : "password"} placeholder="Password" />
                                        <i id='header-t-r-form-eye' class={`fa-solid ${pass ? "fa-eye-slash" : "fa-eye"}`} onClick={passShow} style={{ color: '#afafaf' }}></i>
                                        <span id='header-t-r-form-forgot'><a href="#">Forgot Password?</a></span>
                                    </div>
                                    <div id="header-t-r-form-login-btn" className="h-t-r-form-btn">
                                        <a href="#">
                                            Login
                                        </a>
                                    </div>
                                    <div id="header-t-r-form-register-btn" className="h-t-r-form-btn">
                                        <a href="#">
                                            Register
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={header ? 'header-bottom active' : 'header-bottom'}>
                    <div className="container">
                        <div className="header-bottom-wrapper">
                            <ul className="header-b-quick-links">
                                {quickLinksData.map((item) => {
                                    return (
                                        <li>
                                            <a href={item.address}>
                                                {item.title}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

            </header>

            {/* <div className='registration-form-area'>
                <div className='container-2'>
                    <div className='registration-wrapper'>
                        <h2>Register</h2>
                        <form className='registration-form'>
                            <div className='registration-form-input-box'>
                                <label htmlFor="reg-full-name">Full Name</label>
                                <div className='reg-in-box'>
                                    <i class="fa-solid fa-id-card" style={{ color: '#000000' }}></i>
                                    <input type="text" id='reg-full-name' placeholder='Enter your full name' />
                                </div>
                            </div>
                            <div className='registration-form-input-box'>
                                <label htmlFor="reg-email">Email</label>
                                <div className='reg-in-box'>
                                    <i class="fa-solid fa-envelope" style={{ color: '#000000' }}></i>
                                    <input type="email" id='reg-email' placeholder='Enter your email address' />
                                </div>
                            </div>
                            <div className='registration-form-input-box'>
                                <label htmlFor="reg-phone">Phone Number</label>
                                <div className='reg-in-box'>
                                    <i class="fa-solid fa-mobile" style={phoneNum ? { color: '#000000' } : { color: '#ff0000' }}></i>
                                    <input type="text" id='reg-phone' placeholder='Enter your phone number' onChange={isPhoneNum} style={phoneNum ? { color: '#000000' } : { color: '#ff0000' }}/>
                                </div>
                            </div>
                            <div className='registration-form-input-box'>
                                <label>Gender</label>
                                <div className='reg-in-box reg-in-gender-box'>
                                    <div className='reg-in-gender-in-box'>
                                        <input type="radio" id='reg-gender-male' name='gender' value='Male' />
                                        <label htmlFor="reg-gender-male">Male</label>
                                    </div>
                                    <div className='reg-in-gender-in-box'>
                                        <input type="radio" id='reg-gender-female' name='gender' value='Female' />
                                        <label htmlFor="reg-gender-female">Female</label>
                                    </div>
                                    <div className='reg-in-gender-in-box'>
                                        <input type="radio" id='reg-gender-not' name='gender' value='Prefer not to say' />
                                        <label htmlFor="reg-gender-not">Prefer not to say</label>
                                    </div>
                                </div>
                            </div>
                            <div className='registration-form-input-box'>
                                <label htmlFor="reg-cre-pass">Create Password</label>
                                <div className='reg-in-box'>
                                    <i class="fa-solid fa-lock" style={{ color: '#000000' }}></i>
                                    <input type={pass ? "text" : "password"} id='reg-cre-pass' placeholder='Create Password' onChange={passStore}/>
                                    <i class={`fa-solid ${pass ? "fa-eye-slash" : "fa-eye"}`} onClick={passShow} style={{ color: '#000000' }}></i>
                                </div>
                                <label htmlFor="reg-con-pass">Confirm Password</label>
                                <div className='reg-in-box'>
                                    <i class="fa-solid fa-lock" style={{ color: '#000000' }}></i>
                                    <input type={pass ? "text" : "password"} id='reg-con-pass' placeholder='Confirm Password' onChange={passCheck}/>
                                    <i class="fa-solid fa-eye" style={{ color: '#000000' }}></i>
                                </div>
                            </div>
                            <button type="submit">Register</button>
                            <div className='registration-form-input-box'>
                                <label htmlFor="reg-id">Customer ID</label>
                                <div className='reg-in-box'>
                                    <i class="fa-solid fa-user" style={{ color: '#000000' }}></i>
                                    <input type="text" id='reg-id' placeholder='Your Customer ID' readOnly />
                                </div>
                            </div>
                            <p>Already have an account? <a href="#">Login</a></p>
                        </form>
                    </div>
                </div>
            </div> */}
        </>
    )
}