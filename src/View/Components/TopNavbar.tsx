import MCSEvolvedLogo from '../Images/logowide.svg'
import Portal from './Portal'
import UserInfo from './UserInfo'

export default function TopNavbar(){
  return (
    <div className='bg-MCS-DarkerBlue h-14 flex items-center justify-between'>
      <div className='flex items-center w-80 h-full'>
        <Portal></Portal>
        <a href='/' className='h-max ml-1'>
          <img src={MCSEvolvedLogo} className='h-8' alt='MCS'></img>
        </a>
      </div>
      <a href='/emerald-exchange' className='flex items-center h-full'>
        {/* <MCSAnalyserLogo className='h-5/6 w-auto'></MCSAnalyserLogo> */}
        <h1 className='text-2xl'>Emerald Exchange</h1>
      </a>
      <div className='flex items-center w-80 justify-end h-full'>
        <UserInfo></UserInfo>
      </div>
    </div>
  )
}