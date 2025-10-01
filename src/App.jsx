import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import Scene3D from './components/3d/Scene3D'
import { Environment, OrbitControls } from '@react-three/drei'
import Navigation from './components/Navigation/Navigation'
import HeroSection from './components/sections/Hero'
import SkillsSection from './components/sections/Skills'
import ExperienceSection from './components/sections/Experience'
import EducationSection from './components/sections/Education'
import ProjectsSection from './components/sections/Projects'
import ContactSection from './components/sections/Contact'
import { Toaster } from 'sonner'

const App = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Fixed 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <Scene3D />
            <Environment preset="night" />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Toaster />
          <HeroSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <ContactSection />
        </motion.div>
      </main>
    </div>
  )
}

export default App