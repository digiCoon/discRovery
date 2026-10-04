import Hero from '../components/Hero.jsx'
import Challenges from '../components/Challenges.jsx'
import LatestEntries from '../components/LatestEntries.jsx'
import Team from '../components/Team.jsx'
import Plan from '../components/Plan.jsx'

export default function Home() {
    return (
        <>
            <Hero />
            <Challenges />
            <LatestEntries />
            <Plan />
            <Team />
        </>
    )
}