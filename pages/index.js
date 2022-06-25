import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
    </div>
  )
}
