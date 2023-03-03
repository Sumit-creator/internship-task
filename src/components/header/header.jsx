import Link from 'next/link'
import React from 'react'
const header = () => {
    return (
        <>
            <header>
                <div className="navbar">
                    <div className="logo ">MARKALL</div>
                    <div className="nav">
                        <Link href="/#" passHref legacyBehavior>
                            <a>
                            Services</a>
                        </Link>
                        <Link href="/#" passHref legacyBehavior>
                            <a>
                            Pricing</a>
                        </Link>
                        <Link href="/#" passHref legacyBehavior>
                            <a>
                            About Us</a>
                        </Link>
                    </div>
                    <div>
                        <button className="get-btn">
                            Get Started
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}
export default header