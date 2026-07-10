import api from './api'

export const cmsService = {
  getHomeContent:      ()         => api.get('/cms/home'),
  getServices:         ()         => api.get('/cms/services'),
  getServiceBySlug:    (slug)     => api.get(`/cms/services/${slug}`),
  getPortfolio:        (category) => api.get('/cms/portfolio', { params: { category } }),
  getPortfolioById:    (id)       => api.get(`/cms/portfolio/${id}`),
  getBlogs:            (params)   => api.get('/cms/blogs', { params }),
  getBlogBySlug:       (slug)     => api.get(`/cms/blogs/${slug}`),
  getTeam:             ()         => api.get('/cms/team'),
  getTestimonials:     ()         => api.get('/cms/testimonials'),
  getIndustries:       ()         => api.get('/cms/industries'),
  getJobs:             ()         => api.get('/cms/careers'),
  getJobById:          (id)       => api.get(`/cms/careers/${id}`),
  submitContact:       (data)     => api.post('/public/contact', data),
  submitApplication:   (data)     => api.post('/public/careers/apply', data),
  subscribeNewsletter: (email)    => api.post('/public/newsletter', { email }),
  requestQuote:        (data)     => api.post('/public/quote', data),
  getStats:            ()         => api.get('/cms/stats'),
}

export default cmsService