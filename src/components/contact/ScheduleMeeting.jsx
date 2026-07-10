import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiVideo, FiCheck } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'
import toast from 'react-hot-toast'

const meetingTypes = [
  { id: 'video',  icon: <FiVideo />,    label: 'Video Call',       desc: 'Google Meet or Zoom',     color: '#1a3cff' },
  { id: 'phone',  icon: <FiClock />,    label: 'Phone Call',       desc: '30-min consultation',     color: '#10b981' },
  { id: 'office', icon: <FiCalendar />, label: 'Office Visit',     desc: 'Colombo office (by appt)', color: '#8b5cf6' },
]

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
]

const getDates = () => {
  const dates = []
  const today = new Date()
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today)
    d.setDate(today.getDate() + i)
    if (d.getDay() !== 0) {
      dates.push({
        date:  d,
        label: d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
        value: d.toISOString().split('T')[0],
      })
    }
  }
  return dates.slice(0, 10)
}

const ScheduleMeeting = () => {
  const [step,        setStep]        = useState(1)
  const [meetingType, setMeetingType] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [form,        setForm]        = useState({ name: '', email: '', topic: '' })
  const [loading,     setLoading]     = useState(false)
  const [booked,      setBooked]      = useState(false)

  const dates = getDates()

  const handleBook = async () => {
    if (!form.name || !form.email) {
      toast.error('Please fill in your name and email')
      return
    }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setBooked(true)
    setLoading(false)
    toast.success('Meeting scheduled! Check your email for confirmation.')
  }

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#0a0f1e 0%,#0d1b3e 60%,#0a0f1e 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(26,60,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(26,60,255,0.5) 1px,transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-6 relative">
        <SectionTitle
          badge="Book A Meeting"
          title={<>Schedule A Free <span style={{ background: 'linear-gradient(135deg,#60a5fa,#818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Consultation</span></>}
          subtitle="Choose a time that works for you. No commitment required — just a friendly conversation about your project."
          align="center"
          light
        />

        <div className="max-w-3xl mx-auto">
          {booked ? (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <motion.div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: 'linear-gradient(135deg,#10b981,#059669)' }}
                animate={{ scale: [0, 1.2, 1] }}
              >
                <FiCheck size={36} className="text-white" />
              </motion.div>
              <h3 className="text-white font-heading font-bold text-2xl mb-3">
                Meeting Confirmed! 🎉
              </h3>
              <p className="text-gray-400 mb-3">
                <strong className="text-white">{selectedDate}</strong> at{' '}
                <strong className="text-white">{selectedTime}</strong>
              </p>
              <p className="text-gray-400 text-sm mb-8">
                A calendar invite has been sent to <strong className="text-blue-400">{form.email}</strong>
              </p>
              <motion.button
                onClick={() => { setBooked(false); setStep(1); setMeetingType(''); setSelectedDate(''); setSelectedTime(''); setForm({ name: '', email: '', topic: '' }) }}
                className="px-6 py-3 rounded-full text-white font-semibold text-sm"
                style={{ background: 'linear-gradient(135deg,#1a3cff,#4169E1)' }}
                whileHover={{ scale: 1.04 }}
              >
                Book Another Meeting
              </motion.button>
            </motion.div>
          ) : (
            <div
              className="rounded-3xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* Steps indicator */}
              <div className="flex border-b border-white/10">
                {[
                  { n: 1, label: 'Meeting Type' },
                  { n: 2, label: 'Pick Date' },
                  { n: 3, label: 'Pick Time' },
                  { n: 4, label: 'Your Details' },
                ].map((s) => (
                  <div
                    key={s.n}
                    className="flex-1 py-4 text-center text-xs font-semibold border-r border-white/10 last:border-r-0 transition-colors duration-300 cursor-pointer"
                    style={{
                      color: step >= s.n ? '#60a5fa' : '#4b5563',
                      background: step === s.n ? 'rgba(26,60,255,0.1)' : 'transparent',
                    }}
                    onClick={() => step > s.n && setStep(s.n)}
                  >
                    <span
                      className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-1.5"
                      style={{
                        background: step >= s.n ? '#1a3cff' : 'rgba(255,255,255,0.1)',
                        color: 'white',
                      }}
                    >
                      {step > s.n ? <FiCheck size={12} /> : s.n}
                    </span>
                    <span className="hidden sm:inline">{s.label}</span>
                  </div>
                ))}
              </div>

              <div className="p-8">
                {/* Step 1 – Meeting Type */}
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="text-white font-bold text-lg mb-6">How would you like to meet?</h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {meetingTypes.map((type) => (
                        <motion.button
                          key={type.id}
                          onClick={() => { setMeetingType(type.id); setStep(2) }}
                          className="p-6 rounded-2xl text-center transition-all duration-300"
                          style={{
                            background: meetingType === type.id ? `${type.color}20` : 'rgba(255,255,255,0.03)',
                            border: `2px solid ${meetingType === type.id ? type.color : 'rgba(255,255,255,0.08)'}`,
                          }}
                          whileHover={{ scale: 1.03, border: `2px solid ${type.color}` }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4"
                            style={{ background: `${type.color}20`, color: type.color }}
                          >
                            {type.icon}
                          </div>
                          <div className="text-white font-bold text-sm mb-1">{type.label}</div>
                          <div className="text-gray-400 text-xs">{type.desc}</div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2 – Date */}
                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="text-white font-bold text-lg mb-6">Select a date</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                      {dates.map((d) => (
                        <motion.button
                          key={d.value}
                          onClick={() => { setSelectedDate(d.label); setStep(3) }}
                          className="p-3 rounded-xl text-center text-sm transition-all duration-200"
                          style={{
                            background: selectedDate === d.label ? '#1a3cff' : 'rgba(255,255,255,0.03)',
                            border: `1px solid ${selectedDate === d.label ? '#1a3cff' : 'rgba(255,255,255,0.08)'}`,
                            color: selectedDate === d.label ? 'white' : '#9ca3af',
                          }}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          {d.label}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3 – Time */}
                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="text-white font-bold text-lg mb-2">Select a time slot</h3>
                    <p className="text-gray-400 text-sm mb-6">{selectedDate} · Sri Lanka Time (IST)</p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      {timeSlots.map((time) => (
                        <motion.button
                          key={time}
                          onClick={() => { setSelectedTime(time); setStep(4) }}
                          className="py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                          style={{
                            background: selectedTime === time ? '#1a3cff' : 'rgba(255,255,255,0.03)',
                            border: `1px solid ${selectedTime === time ? '#1a3cff' : 'rgba(255,255,255,0.08)'}`,
                            color: selectedTime === time ? 'white' : '#9ca3af',
                          }}
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          {time}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 4 – Details */}
                {step === 4 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="text-white font-bold text-lg mb-2">Your details</h3>
                    <p className="text-gray-400 text-sm mb-6">
                      {selectedDate} at {selectedTime}
                    </p>

                    <div className="space-y-4 mb-6">
                      {[
                        { label: 'Full Name *',     field: 'name',  type: 'text',  placeholder: 'Your name' },
                        { label: 'Email Address *', field: 'email', type: 'email', placeholder: 'your@email.com' },
                        { label: 'Meeting Topic',   field: 'topic', type: 'text',  placeholder: 'e.g. Website Development Project' },
                      ].map((f) => (
                        <div key={f.field}>
                          <label className="block text-gray-400 text-sm mb-1.5">{f.label}</label>
                          <input
                            type={f.type}
                            placeholder={f.placeholder}
                            value={form[f.field]}
                            onChange={(e) => setForm((p) => ({ ...p, [f.field]: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl border text-white text-sm outline-none"
                            style={{
                              background: 'rgba(255,255,255,0.05)',
                              border: '1px solid rgba(255,255,255,0.1)',
                            }}
                            onFocus={(e) => { e.target.style.borderColor = '#1a3cff'; e.target.style.boxShadow = '0 0 0 3px rgba(26,60,255,0.15)' }}
                            onBlur={(e)  => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none' }}
                          />
                        </div>
                      ))}
                    </div>

                    <motion.button
                      onClick={handleBook}
                      disabled={loading}
                      className="w-full py-4 rounded-xl text-white font-bold flex items-center justify-center gap-2"
                      style={{ background: 'linear-gradient(135deg,#1a3cff,#4169E1)', boxShadow: '0 0 25px rgba(26,60,255,0.4)' }}
                      whileHover={!loading ? { scale: 1.02 } : {}}
                      whileTap={!loading ? { scale: 0.98 } : {}}
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <><FiCalendar size={17} /> Confirm Booking</>
                      )}
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ScheduleMeeting