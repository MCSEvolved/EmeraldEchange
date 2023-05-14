import '../Styles/TopNavBar.css'
import { ReactComponent as PortalButtonImage } from '../Images/PortalButtonGoogle.svg'
import { ReactComponent as AccountIcon } from '../Images/AccountIcon.svg'
import MCSEvolvedLogo from '../Images/MCS-evolved-logo.png'

function TopNavbar(){
  return (
    <div className='bg-MCS-DarkerBlue h-14 flex items-center justify-between'>
      <div className='flex items-center w-80'>
        <button className='h-max p-1 rounded-full hover:bg-white hover:bg-opacity-20 active:bg-opacity-25'>
          <PortalButtonImage className='h-10 w-auto' fill='white'></PortalButtonImage>
        </button> 
        <a href='/' className='h-max ml-1'>  
          <img src={MCSEvolvedLogo} className='h-10' alt='MCS'></img>
        </a>
      </div>
      <a href='/' className='h-max'>
        <h1 className='text-white text-2xl'>Emerald Exchange</h1>
      </a>
      <div className='flex items-center w-80 justify-end'>
        <a>
          <h1 className='text-white'>Username</h1>
        </a>
        <AccountIcon className='h-10 w-auto ml-2' fill='#2bc0d3'></AccountIcon>
      </div>
    </div>
  )
}

export default TopNavbar