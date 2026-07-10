export const rules = {
  required: (label = 'This field') =>
    (v) => !v?.toString().trim() ? `${label} is required` : '',

  email: () =>
    (v) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? 'Enter a valid email address' : '',

  phone: () =>
    (v) => v && !/^[\+]?[\d\s\-\(\)]{7,15}$/.test(v) ? 'Enter a valid phone number' : '',

  min: (n, label = 'This field') =>
    (v) => v?.length < n ? `${label} must be at least ${n} characters` : '',

  max: (n, label = 'This field') =>
    (v) => v?.length > n ? `${label} must be no more than ${n} characters` : '',

  url: () =>
    (v) => v && !/^https?:\/\/.+/.test(v) ? 'Enter a valid URL starting with http/https' : '',

  number: (label = 'This field') =>
    (v) => isNaN(Number(v)) ? `${label} must be a number` : '',

  positive: (label = 'This field') =>
    (v) => Number(v) <= 0 ? `${label} must be greater than 0` : '',
}

export const validate = (values, schema) => {
  const errors = {}
  Object.entries(schema).forEach(([field, fieldRules]) => {
    for (const rule of fieldRules) {
      const error = rule(values[field])
      if (error) { errors[field] = error; break }
    }
  })
  return errors
}

export const isValidEmail  = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
export const isValidPhone  = (p) => /^[\+]?[\d\s\-\(\)]{7,15}$/.test(p)
export const isValidUrl    = (u) => /^https?:\/\/.+/.test(u)
export const isEmpty       = (v) => !v?.toString().trim()