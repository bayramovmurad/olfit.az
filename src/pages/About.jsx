import AboutBanner from "../components/about/AboutBanner"
import AboutContext from "../components/about/AboutContext"

const About = () => {
  return (
   <>
      <header>
        <AboutBanner />
      </header>
      <main>
        <AboutContext/>
      </main>
   </>
  )
}
export default About