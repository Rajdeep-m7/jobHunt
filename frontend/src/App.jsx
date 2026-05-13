import DetailSection from "./components/DetailSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import JobsByLocation from "./components/JobsByLocation"
import Oppotunities from "./components/Oppotunities"
import SponserBanners from "./components/SponserBanners"
import Steps from "./components/Steps"

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="bg-gray-100">
        <SponserBanners />
        <DetailSection />
        <Oppotunities />
        <Steps />
        <JobsByLocation />
      </div>
      <Footer />
    </div>
  )
}

export default App