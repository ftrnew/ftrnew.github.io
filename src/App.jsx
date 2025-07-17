import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Heart, Users, Star, ArrowRight, Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

// Import images
import NSPVLogo from './assets/NSPV_logo.webp'
import NSPVEsportLogo from './assets/NSPV_Esport_logo.webp'
import NSPVTextLogo from './assets/NSPV_text_logo.webp'
import FamilyIllustration from './assets/family_illustration.png'
import IvannoTestimonial from './assets/Ivanno_testimonial.png'
import FaqihTestimonial from './assets/Faqih_testimonial.webp'
import CitraTestimonial from './assets/Citra_testimonial.webp'
import ChristyTestimonial from './assets/Christy_testimonial.webp'
import RikaTestimonial from './assets/Rika_testimonial.webp'
import FriscaTestimonial from './assets/Frisca_testimonial.webp'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const coreValues = [
    {
      title: "Respect",
      description: "Kami saling menghormati satu sama lain, tanpa memandang level, kemampuan, atau latar belakang.",
      icon: "🤝"
    },
    {
      title: "Loyalty",
      description: "Kesetiaan terhadap clan dan sesama anggota menjadi fondasi kuat dalam kebersamaan kami.",
      icon: "💎"
    },
    {
      title: "Positivity",
      description: "Kami membangun suasana yang menyenangkan dan bebas dari drama dengan canda tawa.",
      icon: "😊"
    },
    {
      title: "Teamwork",
      description: "Kami percaya bahwa kemenangan dan pertumbuhan terbaik datang dari kerjasama yang solid.",
      icon: "🤜🤛"
    },
    {
      title: "Support",
      description: "Di NSPV, kami saling menguatkan—baik saat menang, kalah, atau dalam kehidupan nyata.",
      icon: "🛡️"
    },
    {
      title: "Commitment",
      description: "Kami berkomitmen untuk terus berkembang bersama sebagai komunitas yang aktif dan saling peduli.",
      icon: "⚡"
    },
    {
      title: "Integrity",
      description: "Kejujuran dan tanggung jawab adalah hal penting dalam menjaga kepercayaan satu sama lain.",
      icon: "🎯"
    },
    {
      title: "Creativity",
      description: "Kami membuka ruang untuk ide-ide baru dalam event, konten, maupun strategi bermain.",
      icon: "🎨"
    }
  ]

  const testimonials = [
    {
      name: "Ivano",
      quote: "NSPV tuh tempat paling nyaman buat lepas penat sambil ketawa-ketawa.",
      image: IvannoTestimonial
    },
    {
      name: "Faqih",
      quote: "Pokoknya kalau udah bareng NSPV, susah banget ngerasa sendirian.",
      image: FaqihTestimonial
    },
    {
      name: "Citra",
      quote: "Dulu cuma cari temen mabar, tapi dapetnya keluarga. NSPV emang gak kaleng-kaleng.",
      image: CitraTestimonial
    },
    {
      name: "Christy",
      quote: "Awalnya cuma iseng join, eh sekarang malah betah. Orang-orangnya asik semua.",
      image: ChristyTestimonial
    },
    {
      name: "Rika",
      quote: "Nggak nyangka sih, ternyata gabung di NSPV tuh seseru itu. Kayak punya keluarga baru aja.",
      image: RikaTestimonial
    },
    {
      name: "Frisca",
      quote: "Bukan cuma main bareng, tapi juga saling dukung. NSPV beda sih.",
      image: FriscaTestimonial
    }
  ]

  const steps = [
    {
      number: "01",
      title: "Daftar",
      description: "Isi formulir atau kirim pesan ke admin buat daftar jadi bagian dari NSPV."
    },
    {
      number: "02",
      title: "Konfirmasi",
      description: "Tunggu konfirmasi dari tim kami untuk cek data dan kesiapan kamu."
    },
    {
      number: "03",
      title: "Bergabung",
      description: "Kalau sudah disetujui, kamu langsung masuk ke grup dan resmi jadi bagian dari keluarga NSPV!"
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'values', 'testimonials', 'process']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img src={NSPVLogo} alt="NSPV Logo" className="h-10 w-10 rounded-full" />
              <span className="text-white font-bold text-xl">KELUARGA NSPV</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'Tentang' },
                  { id: 'values', label: 'Core Values' },
                  { id: 'testimonials', label: 'Testimonials' },
                  { id: 'process', label: 'Process' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/30 backdrop-blur-md"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'Tentang' },
                  { id: 'values', label: 'Core Values' },
                  { id: 'testimonials', label: 'Testimonials' },
                  { id: 'process', label: 'Process' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                      activeSection === item.id
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <img src={FamilyIllustration} alt="NSPV Family" className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              KELUARGA <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">NSPV</span>
              <Heart className="inline-block ml-4 text-red-500" size={48} />
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Komunitas gaming yang tumbuh menjadi ruang kebersamaan yang menghubungkan pemain dari berbagai penjuru Indonesia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('about')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Pelajari Lebih Lanjut
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('process')}
                className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 text-lg rounded-full transition-all duration-300"
              >
                Bergabung Sekarang
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-white" size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Tentang NSPV</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Didirikan pada tahun 2019, KELUARGA NSPV tumbuh dari sekadar komunitas gaming menjadi ruang kebersamaan yang menghubungkan pemain dari berbagai penjuru Indonesia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src={NSPVEsportLogo} alt="NSPV Esport" className="w-full max-w-md mx-auto rounded-2xl shadow-2xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Dukung Komunitas Gamer Indonesia</h3>
                  <p className="text-gray-300">
                    Kami hadir untuk membangun koneksi, memberikan dukungan, dan membuka peluang bertumbuh bagi semua anggota tanpa memandang latar belakang. Bersama kami, kamu tidak hanya menemukan teman mabar—tapi juga keluarga yang loyal, aktif, dan saling menguatkan.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Latar Belakang NSPV</h3>
                  <p className="text-gray-300">
                    KELUARGA NSPV lahir dari keinginan untuk menciptakan sebuah ruang aman, positif, dan menyenangkan bagi siapa saja yang ingin bermain game sambil membangun relasi yang bermakna. Berawal dari sekelompok pemain yang saling mengenal lewat mabar biasa, NSPV tumbuh menjadi komunitas yang berakar pada nilai kekeluargaan, dukungan moral, dan semangat kolaborasi.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-md border-white/20 h-full">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-6">VISION</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    NSPV bukan sekadar komunitas game biasa, tetapi sebuah tempat berkumpul yang nyaman, solid, dan penuh rasa saling menghargai. Kami membangun suasana di mana setiap anggota merasa diterima apa adanya, bisa bebas berekspresi, dan merasakan kehangatan dalam kebersamaan—baik saat bermain maupun di luar permainan.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-md border-white/20 h-full">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-6">MISSION</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Kami percaya bahwa bermain bersama bukan hanya soal menang atau kalah, tetapi tentang menikmati prosesnya bersama-sama. Karena itu, kami berkomitmen untuk terus menciptakan lingkungan yang seru, aman, dan menyenangkan bagi semua anggota. Di dalam NSPV, kami tumbuh bareng sebagai komunitas, saling mendukung satu sama lain, dan menjadikan tawa sebagai bagian penting dari perjalanan ini.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nilai-nilai yang menjadi fondasi kuat dalam kebersamaan KELUARGA NSPV
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 h-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Testimonials</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dengar langsung dari anggota keluarga NSPV tentang pengalaman mereka
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 h-full hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} fill="currentColor" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bergabung dengan KELUARGA NSPV sangat mudah! Ikuti langkah-langkah sederhana ini
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transform translate-x-1/2"></div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
              <Users className="mr-2" size={20} />
              Bergabung dengan KELUARGA NSPV
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img src={NSPVLogo} alt="NSPV Logo" className="h-12 w-12 rounded-full" />
            <span className="text-white font-bold text-2xl">KELUARGA NSPV</span>
            <Heart className="text-red-500" size={24} />
          </div>
          <p className="text-gray-400 mb-4">
            © 2019. KELUARGA NSPV ❤️
          </p>
          <p className="text-gray-500 text-sm">
            Komunitas gaming yang menghubungkan pemain dari berbagai penjuru Indonesia
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

