import DetailSection from "../components/DetailSection"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import JobsByLocation from "../components/JobsByLocation"
import OpportunitiesLimit from "../components/OpportunitiesLimit"
import SponserBanners from "../components/SponserBanners"
import Steps from "../components/Steps"

const Home = () => {
  return (
    <div>
        <Header />
      <Hero />
      <div className="bg-gray-100">
        <SponserBanners />
        <DetailSection />
        <OpportunitiesLimit />
        <Steps />
        <JobsByLocation />
      </div>
      <Footer />
    </div>
  )
}

export default Home