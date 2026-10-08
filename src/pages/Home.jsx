import Hero from '../components/Hero.jsx'
import Challenges from '../components/Challenges.jsx'
import GameTeaser from '../components/GameTeaser.jsx'
import LatestEntries from '../components/LatestEntries.jsx'
import Team from '../components/Team.jsx'
import Plan from '../components/Plan.jsx'

export default function Home() {
    return (
        <>
            <Hero />
            <Challenges />
            <GameTeaser />
            <LatestEntries />
            <Plan />
            <Team />
        </>
    )
}