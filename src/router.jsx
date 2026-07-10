import { createBrowserRouter, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import PublicLayout  from './layouts/PublicLayout'
import LoadingScreen from './components/common/LoadingScreen'

const lazy_ = (imp) => lazy(imp)

const HomePage           = lazy_(() => import('./pages/public/HomePage'))
const AboutPage          = lazy_(() => import('./pages/public/AboutPage'))
const ServicesPage       = lazy_(() => import('./pages/public/ServicesPage'))
const ServiceDetailPage  = lazy_(() => import('./pages/public/ServiceDetailPage'))
const PortfolioPage      = lazy_(() => import('./pages/public/PortfolioPage'))
const PortfolioDetailPage= lazy_(() => import('./pages/public/PortfolioDetailPage'))
const IndustriesPage     = lazy_(() => import('./pages/public/IndustriesPage'))
const BlogPage           = lazy_(() => import('./pages/public/BlogPage'))
const BlogDetailPage     = lazy_(() => import('./pages/public/BlogDetailPage'))
const CareersPage        = lazy_(() => import('./pages/public/CareersPage'))
const ContactPage        = lazy_(() => import('./pages/public/ContactPage'))

const Wrap = ({ children }) => (
  <Suspense fallback={<LoadingScreen />}>{children}</Suspense>
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true,                   element: <Wrap><HomePage /></Wrap> },
      { path: 'about',                 element: <Wrap><AboutPage /></Wrap> },
      { path: 'services',              element: <Wrap><ServicesPage /></Wrap> },
      { path: 'services/:slug',        element: <Wrap><ServiceDetailPage /></Wrap> },
      { path: 'portfolio',             element: <Wrap><PortfolioPage /></Wrap> },
      { path: 'portfolio/:slug',       element: <Wrap><PortfolioDetailPage /></Wrap> },
      { path: 'industries',            element: <Wrap><IndustriesPage /></Wrap> },
      { path: 'blog',                  element: <Wrap><BlogPage /></Wrap> },
      { path: 'blog/:slug',            element: <Wrap><BlogDetailPage /></Wrap> },
      { path: 'careers',               element: <Wrap><CareersPage /></Wrap> },
      { path: 'contact',               element: <Wrap><ContactPage /></Wrap> },
    ],
  },
  { path: '*', element: <Navigate to="/" replace /> },
])