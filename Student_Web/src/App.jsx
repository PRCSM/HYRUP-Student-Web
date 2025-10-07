
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Explore } from '../components/Explore'
import JobFullView from '../components/JobFullView'
import HackathonFullView from '../components/HackathonFullView'
import Job from '../components/Job'
import { Hackathon } from '../components/Hackathon'
import { Welcome } from '../components/Welcome'
import Modal from '../components/Modal'
import Masonry from '../components/Masonry'
import ExploreJobs from '../components/ExploreJobs'
import Hiring from '../components/Hiring'
import MainCard from '../components/MainCard'
import SavedJobs from '../components/savedjobs'
import SavedJobCard from '../components/SavedJobCard'
import SavedJobRoleDescription from '../components/SavedJobRoleDescription'
import SavedAppliedJobs from '../components/SavedAppliedJobs'
import AppliedJobCard from '../components/AppliedJobCard'
import Profile from '../components/Profile'
import CardContainer from '../components/CardContainer'
function App() {
  return (
    <>
    <Router>
      <Routes>

        <Route path='/' element={<CardContainer />} />
        {/* <Route path='/Explore' element={<Explore />} /> */}
        <Route path='/jobs' element={<JobFullView />} />
        <Route path='/hackathons' element={<HackathonFullView />} />
        <Route path='/jobdetails/maincard' element={<Job />} />
        <Route path='/hackathondetails/maincard' element={<Hackathon />} />
        <Route path='/landing' element={<Welcome />} />
        <Route path='/explore' element={<ExploreJobs />} />
        <Route path='/hiring' element={<Hiring />} />
        <Route path='/home' element={<div className='flex items-center justify-center'><MainCard /></div>}/>
        <Route path='/savedjobs' element={<SavedJobs/>}></Route>
        <Route path='/savedjobdetails/maincard' element={<SavedJobCard/>}></Route>
        <Route path='/savedjobdetails/roledescription' element={<SavedJobRoleDescription />} />
        <Route path='/savedappliedjobs' element={<SavedAppliedJobs/>} />
        <Route path='/appliedjobcard' element={<AppliedJobCard/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
