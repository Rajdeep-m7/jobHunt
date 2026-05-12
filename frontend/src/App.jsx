import DetailSection from "./components/DetailSection"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Oppotunities from "./components/Oppotunities"
import SponserBanners from "./components/SponserBanners"

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="bg-gray-100">
        <SponserBanners />
        <DetailSection />
        <Oppotunities />
      </div>
    </div>
  )
}

export default App