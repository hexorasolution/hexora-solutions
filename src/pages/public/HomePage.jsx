import { Helmet } from 'react-helmet-async'
import HeroSection       from '../../components/home/HeroSection'
import StatsSection      from '../../components/home/StatsSection'
import TrustedBy         from '../../components/home/TrustedBy'
import ServicesSection   from '../../components/home/ServicesSection'
import WhyChooseUs       from '../../components/home/WhyChooseUs'
import IndustriesSection from '../../components/home/IndustriesSection'
import ProcessSection    from '../../components/home/ProcessSection'
import PortfolioPreview  from '../../components/home/PortfolioPreview'
import TestimonialsSection from '../../components/home/TestimonialsSection'
import TeamPreview       from '../../components/home/TeamPreview'
import BlogPreview       from '../../components/home/BlogPreview'
import ContactStrip      from '../../components/home/ContactStrip'

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Hexora Solution | Innovate | Integrate | Empower</title>
        <meta name="description" content="Hexora Solution – Sri Lanka's leading digital business platform. Software development, web solutions, mobile apps, digital marketing and more." />
        <meta name="keywords" content="software development, website design, mobile apps, digital marketing, IT support, ERP, Sri Lanka" />
        <link rel="canonical" href="https://hexora.lk" />
      </Helmet>

      <HeroSection />
      <TrustedBy />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUs />
      <IndustriesSection />
      <ProcessSection />
      <PortfolioPreview />
      <TestimonialsSection />
      <TeamPreview />
      <BlogPreview />
      <ContactStrip />
    </>
  )
}

export default HomePage