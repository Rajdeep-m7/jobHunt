import image1 from "../assets/image copy.png"
import image2 from "../assets/image copy 2.png"
import image3 from "../assets/image copy 3.png"
import image4 from "../assets/image copy 4.png"
import image5 from "../assets/image copy 5.png"
import image6 from "../assets/image copy 6.png"
import image7 from "../assets/image copy 7.png"

const SponserBanners = () => {
  return (
    <div className="flex flex-wrap 2xl:flex-nowrap justify-around items-center p-5 gap-5">
        <img src={image1} className="h-10 w-30 md:w-40 md:h-12" />
        <img src={image2} className="h-10 w-30 md:w-40 md:h-12" />
        <img src={image3} className="h-10 w-30 md:w-40 md:h-12" />
        <img src={image4} className="h-10 w-30 md:w-40 md:h-12" />
        <img src={image5} className="h-10 w-30 md:w-40 md:h-12" />
        <img src={image6} className="h-10 w-30 md:w-40 md:h-12" />
        <img src={image7} className="h-10 w-30 md:w-40 md:h-12" />
    </div>
  )
}

export default SponserBanners