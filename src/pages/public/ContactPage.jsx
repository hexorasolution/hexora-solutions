import { Helmet } from 'react-helmet-async'
import PageHeroBanner    from '../../components/about/PageHeroBanner'
import ContactForm       from '../../components/contact/ContactForm'
import ContactInfo       from '../../components/contact/ContactInfo'
import MapSection        from '../../components/contact/MapSection'
import OfficeBranches    from '../../components/contact/OfficeBranches'
import ScheduleMeeting   from '../../components/contact/ScheduleMeeting'
import ContactFAQ        from '../../components/contact/ContactFAQ'

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Hexora Solution</title>
        <meta
          name="description"
          content="Get in touch with Hexora Solution. Contact us for a free consultation, project quote, or general enquiry. We respond within 24 hours."
        />
        <link rel="canonical" href="https://hexora.lk/contact" />
      </Helmet>

      <PageHeroBanner
        badge="Get In Touch"
        title="Let's Start A"
        titleHighlight="Conversation"
        subtitle="Have a project in mind? We'd love to hear about it. Reach out and we'll get back to you within 24 hours."
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Contact Us' }]}
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80"
      />

      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left – Contact Info */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
            {/* Right – Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <ScheduleMeeting />
      <OfficeBranches />
      <MapSection />
      <ContactFAQ />
    </>
  )
}

export default ContactPage