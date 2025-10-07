import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Explore } from '../components/Explore'
import JobFullView from '../components/JobFullView'
import HackathonFullView from '../components/HackathonFullView'
import Job from '../components/Job'
import RoleDescription from '../components/RoleDescription'
import AboutCompany from '../components/AboutCompany'
import { AboutHackathon } from '../components/AboutHackathon'
import { Hackathon } from '../components/Hackathon'
import { Welcome } from '../components/Welcome'
import Modal from '../components/Modal'
import Masonry from '../components/Masonry'
import ExploreJobs from '../components/ExploreJobs'
import Hiring from '../components/Hiring'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Explore />} />
        <Route path='/jobs' element={<JobFullView />} />
        <Route path='/hackathons' element={<HackathonFullView />} />
        <Route path='/jobdetails/maincard' element={<Job />} />
        <Route path='/jobdetails/about' element={<AboutCompany />} />
        <Route path='/jobdetails/roledescription' element={<RoleDescription />} />
        <Route path='/hackathondetails/maincard' element={<Hackathon />} />
        <Route path='/hackathondetails/about' element={<AboutHackathon />} />
        <Route path='/landing' element={<Welcome />} />
        <Route path='/explore' element={<ExploreJobs />} />
        <Route path='/hiring' element={<Hiring />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
