import { ReactComponent as AccountIcon } from '../Images/AccountIcon.svg'
import {ReactComponent as MCSAnalyserLogo} from '../Images/MCSAnalyserLogo.svg'
import MCSEvolvedLogo from '../Images/MCS-evolved-logo.png'
import NewPortal from './Portal'

export default function TopNavbar(){
  return (
    <div className='bg-MCS-DarkerBlue h-14 flex items-center justify-between'>
      <div className='flex items-center w-80 h-full'>
        <NewPortal></NewPortal>
        <a href='/' className='h-max ml-1'>  
          <img src={MCSEvolvedLogo} className='h-9' alt='MCS'></img>
        </a>
      </div>
      <a href='/emerald-exchange' className='flex items-center h-full'>
        {/* <MCSAnalyserLogo className='h-5/6 w-auto'></MCSAnalyserLogo> */}
        <h1 className='text-2xl'>Emerald Exchange</h1>
      </a>
      <div className='flex items-center w-80 justify-end h-full'>
        <a>
          <h1 className=''>Username</h1>
        </a>
        <AccountIcon className='h-10 w-auto ml-2' fill='#2bc0d3'></AccountIcon>
      </div>
    </div>
  )
}