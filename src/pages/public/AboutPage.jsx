import { Helmet } from 'react-helmet-async'
import PageHeroBanner   from '../../components/about/PageHeroBanner'
import OurStory         from '../../components/about/OurStory'
import VisionMission    from '../../components/about/VisionMission'
import CoreValues       from '../../components/about/CoreValues'
import CompanyTimeline  from '../../components/about/CompanyTimeline'
import MeetTheTeam      from '../../components/about/MeetTheTeam'
import OfficeGallery    from '../../components/about/OfficeGallery'
import Achievements     from '../../components/about/Achievements'
import Partners         from '../../components/about/Partners'
import AboutCTA         from '../../components/about/AboutCTA'

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Hexora Solution</title>
        <meta
          name="description"
          content="Learn about Hexora Solution – our story, vision, mission, team and journey to becoming Sri Lanka's leading digital solutions provider."
        />
        <link rel="canonical" href="https://hexora.lk/about" />
      </Helmet>

      <PageHeroBanner
        badge="About Hexora Solutions"
        title="We Are Digital"
        titleHighlight="Innovators"
        subtitle="Transforming businesses across Sri Lanka and beyond through cutting-edge technology solutions since 2024."
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'About Us' }]}
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
      />

      <OurStory />
      <VisionMission />
      <CoreValues />
      <CompanyTimeline />
      <MeetTheTeam />
      <OfficeGallery />
      <Achievements />
      <Partners />
      <AboutCTA />
    </>
  )
}

export default AboutPage