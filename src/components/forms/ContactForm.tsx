// components/forms/ContactForm.tsx
'use client'

import { useState } from 'react'
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const services = [
    'Konstruksi Gedung',
    'Renovasi & Interior',
    'Perawatan Gedung',
    'Cleaning Service',
    'Pengadaan Barang',
    'Facility Management',
    'Konsultasi Lainnya'
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nama wajib diisi'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Nomor telepon wajib diisi'
    } else if (!/^(\+62|62|0)[0-9]{9,13}$/.test(formData.phone.replace(/[-\s]/g, ''))) {
      newErrors.phone = 'Format nomor telepon tidak valid'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Pesan wajib diisi'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Pesan minimal 10 karakter'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Send to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        })
        
        // Track successful form submission with proper typing
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'contact_form_submit', {
            event_category: 'lead_generation',
            event_label: 'main_contact_form',
            value: 1
          })
        }
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="gap-12 grid lg:grid-cols-2">
      {/* Contact Information */}
      <div className="space-y-8">
        <div>
          <h3 className="mb-4 font-bold text-gray-900 text-2xl">
            Hubungi Kami Sekarang
          </h3>
          <p className="mb-6 text-gray-600">
            Siap melayani kebutuhan konstruksi dan perawatan gedung Anda dengan standar profesional terbaik.
          </p>
        </div>

        <div className="space-y-6">
          {/* Phone */}
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Telepon</h4>
              <p className="text-gray-600">+62-21-XXXX-XXXX</p>
              <p className="text-gray-500 text-sm">Senin - Jumat: 08:00 - 17:00</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Email</h4>
              <p className="text-gray-600">info@viannusamandiri.com</p>
              <p className="text-gray-500 text-sm">Respon dalam 24 jam</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Alamat Kantor</h4>
              <p className="text-gray-600">Jalan Raya Jakarta<br />Jakarta 12345, Indonesia</p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Jam Operasional</h4>
              <p className="text-gray-600">
                Senin - Jumat: 08:00 - 17:00<br />
                Sabtu: 08:00 - 12:00<br />
                Minggu: Tutup
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-50 p-6 border border-red-200 rounded-lg">
          <h4 className="mb-2 font-semibold text-red-900">Kontak Darurat</h4>
          <p className="mb-2 text-red-700 text-sm">
            Untuk keadaan darurat perawatan gedung (24/7):
          </p>
          <p className="font-semibold text-red-900">+62-812-XXXX-XXXX</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-lg p-8 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-2 font-medium text-gray-700 text-sm">
              Nama Lengkap *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Masukkan nama lengkap Anda"
            />
            {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-gray-700 text-sm">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="nama@perusahaan.com"
            />
            {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block mb-2 font-medium text-gray-700 text-sm">
              Nomor Telepon *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="+62-xxx-xxxx-xxxx"
            />
            {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>}
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block mb-2 font-medium text-gray-700 text-sm">
              Nama Perusahaan
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
              placeholder="PT/CV Nama Perusahaan"
            />
          </div>

          {/* Service */}
          <div>
            <label htmlFor="service" className="block mb-2 font-medium text-gray-700 text-sm">
              Layanan yang Dibutuhkan
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
            >
              <option value="">Pilih layanan...</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block mb-2 font-medium text-gray-700 text-sm">
              Pesan / Detail Kebutuhan *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Jelaskan kebutuhan konstruksi atau perawatan gedung Anda..."
            />
            {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors ${
              isSubmitting 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="border-white border-b-2 rounded-full w-5 h-5 animate-spin"></div>
                <span>Mengirim...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Kirim Pesan</span>
              </>
            )}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="bg-green-50 p-4 border border-green-200 rounded-lg">
              <p className="text-green-700 text-sm">
                ✅ Pesan Anda berhasil dikirim! Tim kami akan menghubungi Anda dalam 24 jam.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 p-4 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">
                ❌ Terjadi kesalahan saat mengirim pesan. Silakan coba lagi atau hubungi kami langsung via telepon.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}