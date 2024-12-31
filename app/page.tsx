import HeaderProfile from './components/HeaderProfile'
import Education from './components/Education'
import CareerProfile from './components/CareerProfile'
import Publications from './components/Publications'
import Awards from './components/Awards'
import Skills from './components/Skills'
import AdminRoles from './components/AdminRoles'
import Teaching from './components/Teaching'
import ProfessionalMemberships from './components/ProfessionalMemberships'
import Projects from './components/Projects'
import Supervision from './components/Supervision'
import Footer from './components/Footer'
import Background from './components/Background'
import { Headernav } from './components/Headernav'

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 relative overflow-hidden">
      <Background />
      {/* <Headernav /> */}
      {/* Added margin-top to account for the height of the navigation bar */}
      <div className="max-w-6xl mx-auto mt-auto space-y-12 relative z-10 pt-[64px]">
        <HeaderProfile />
        <Education />
        <CareerProfile />
        <Skills />
        <Publications />
        <Awards />
        <AdminRoles />
        <Teaching />
        <ProfessionalMemberships />
        <Projects />
        <Supervision />
        <Footer />
      </div>
    </main>
  );
}


