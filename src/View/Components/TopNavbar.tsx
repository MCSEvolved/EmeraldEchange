import '../Styles/TopNavBar.css'
import { ReactComponent as PortalButtonImage } from '../Images/PortalButtonGoogle.svg'

function TopNavbar(){
  return (
    <div className='bg-MCS-DarkerBlue h-14 flex items-center'>
      <button className='h-max p-1 rounded-full hover:bg-white hover:bg-opacity-20 active:bg-opacity-25'>
        <PortalButtonImage className='h-10 w-auto' fill='white'></PortalButtonImage>
      </button>
    </div>
  )
}

export default TopNavbar