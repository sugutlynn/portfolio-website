import Image from 'next/image';
import HeroSection from './componets/HeroSection';
import Navbar from './componets/Navbar'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="container mx-auto px-12 py-4">
      <HeroSection/>
      </div>
     
    
    </main>
  )
}
