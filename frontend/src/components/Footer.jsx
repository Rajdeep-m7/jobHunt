import image from "../assets/image copy 10.png"
import footerImg from "../assets/FooterImg.png"
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-blue-700 p-5">
        <div className=" flex flex-wrap gap-5 justify-between items-start text-white pb-5 border-b border-white">
        <div className="max-w-80 lg:max-w-1/4">
            <img src={image} className="h-15 w-auto" />
            <p className="my-3">Job Hunt Placement is a trusted recruitment agency with over 20 years of experience, connecting skilled candidates with top employers in various industries, both in India and abroad, for optimal career success.</p>
            <button className="px-2 bg-white rounded text-blue-600">Apply Now Today!</button>
        </div>

        <div className="lg:max-w-1/4">
            <h1 className="font-bold text-2xl">Quick Links</h1>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Find Jobs</li>
                <li>Why Us</li>
                <li>Testomonial</li>
                <li>Contact Us</li>
            </ul>
        </div>

        <div className="lg:max-w-1/4 max-w-80">
            <h1 className="text-2xl font-bold">Contact Information</h1>
            <p className="flex gap-3 items-center"><FaWhatsapp /> +1234567890</p>
            <p className="flex gap-3 items-center"><FaPhoneAlt /> +1234567890</p>
            <p className="flex gap-3 items-center"><MdEmail /> yourName@gmail.com</p>
            <p className="flex justify-start gap-3"><IoLocation className="max-w-4 w-full" />Job Hunt Placement, Parras Kunj Building, Ground Floor, Behind Biswadip Cinema Hall, Landmark- Darjeeling Tea Traders Siliguri, 734003</p>
        </div>

        <div className="lg:max-w-1/4">
            <img src={footerImg} className="h-40 w-auto" />
            <p className="flex gap-3 items-center text-2xl font-bold">Follow Us <FaFacebookF /><FaInstagram/><FaLinkedin /></p>
        </div>
    </div>
    <div>
        <p className="text-white text-center font-semibold my-3">© Copyright JobHunt - 2026 All Rights Reserved</p>
    </div>
    </div>
  )
}

export default Footer