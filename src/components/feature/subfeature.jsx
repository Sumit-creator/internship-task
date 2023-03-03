import Image from "next/image";
import auto from "../../../public/images/automation.png";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SubFeature = () => (
    <>
      <div className="sub1">
      <div className="sub">
        <h1 className="sub2">
          Save precious time <br />
          with automation
        </h1>
        <p className="sub3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
          explicabo, incidunt id beatae commodi maiores et magni quod quas omnis
          eaque ipsam perspiciatis cupiditate blanditiis sequi culpa. Nulla,
          dolores quod.
        </p>
        <Link href="/#" passHref legacyBehavior>
          <a>
          Learn More&nbsp;<FontAwesomeIcon
                                icon={faArrowRight}
                                style={{ fontSize: 20, color: "black" }}
                            /></a>
        </Link>
      </div>
      <div className="sub5">
        <Image src={auto} alt="" className="sub4" />
      </div>
    </div>
    </>
);
