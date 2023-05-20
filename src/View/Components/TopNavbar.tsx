import Portal from './Portal'
import UserInfo from './UserInfo'
import {ReactComponent as EmeraldExchangeLogo} from '../Images/emerald-exchange-wide.svg'

export default function TopNavbar(){
  return (
    <div className='bg-MCS-DarkerBlue h-14 flex items-center justify-between'>
      <div className='flex items-center w-80 h-full'>
        <Portal></Portal>
        <a href='/' className='h-max ml-1'>
          <EmeraldExchangeLogo className='h-7'></EmeraldExchangeLogo>
        </a>
      </div>
      <a href='/insert-path' className='flex items-center h-full'>
        React Template
      </a>
      <div className='flex items-center w-80 justify-end h-full'>
        <UserInfo></UserInfo>
      </div>
    </div>
  )
}