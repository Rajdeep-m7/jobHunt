import HeroImage from "../assets/HeroImage.png"
const Hero = () => {
  return (
    <div className="flex justify-between gap-5 px-5 py-10 md:pb-0 bg-linear-to-tl from-blue-50 to-white">
        <div className="flex flex-col justify-center items-center w-full p-5">
            <h1 className="font-bold text-5xl md:text-6xl ">Your <span className="text-blue-600">Career</span> journey<br></br> Starts Here- Explore <br></br><span className="text-blue-600">JobHunt Now!</span></h1>
            <button className="p-1 px-2 text-blue-600 rounded mt-7 border border-blue-600 font-semibold justify-item-">Find Jobs Today</button>
        </div>
        <div className="hidden md:block">
            <img src={HeroImage} className="w-150 h-120 " />
        </div>
    </div>
  )
}

export default Hero