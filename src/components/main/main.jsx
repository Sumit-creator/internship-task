
import Header from '../header/header';
import hero from '../../../public/images/main.png';
import Image from 'next/image';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Main = () => (
    <>
        <div className="main">
            <Header />
            <div className="hero md:pb-40 hero items-center">
                <div className="hero_left">
                    <h1 className="t1 ">
                        Reach your - <br />
                        <span className="t2">audience</span> & convert
                    </h1>
                    <h1 className="t1 mb-10">
                        your leads
                    </h1>
                    <p className="t3 mb-6">
                        Get your customers with SEO, rank your business with <br /> email
                        marketing, build sales leads
                    </p>
                    <div>
                        <button className="get-btn text-black font-bold px-3 py-1 rounded-md mr-5">
                            Get Started
                        </button>
                        <button className="bg-black text-white font-bold px-3 py-1 rounded-md border-solid border-white border">
                            <FontAwesomeIcon
                                icon={faPlay}
                                style={{ fontSize: 20, color: "white" }}
                            />&nbsp; Watch Demo
                        </button>
                    </div>
                </div>
                <div className="hero_right">
                    <Image className="w-[500px]  md:block" src={hero} alt="" />
                </div>
            </div>
        </div>
    </>
);
