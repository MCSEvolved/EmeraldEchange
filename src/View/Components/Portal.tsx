import { Popover, Transition } from "@headlessui/react";
import {ReactComponent as PortalGridIcon} from '../Images/PortalGridIcon.svg'

export default function Portal() {

  const rotatePortalIcon = () => {
    const portalIcon = document.getElementById('portal-icon')
    if(!portalIcon) return
    portalIcon.classList.toggle('rotate-180')
    console.log('rotate')
  }

  return (
    <Popover className='relative'>
      <Popover.Button className='h-max p-3 rounded-full outline-0 hover:bg-white hover:bg-opacity-20 active:bg-opacity-25'>
        <PortalGridIcon id="portal-icon" className='h-7 w-auto duration-700'></PortalGridIcon>
      </Popover.Button>

      <Transition
      enter="transition ease-in-out duration-300"
      enterFrom="-translate-x-52"
      enterTo="translate-x-0"
      leave="transition ease-in-out duration-300"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-52"
      beforeEnter={rotatePortalIcon}
      beforeLeave={rotatePortalIcon}
      >
        <Popover.Panel>
          <div className='absolute bg-MCS-DarkerBlue rounded-br-xl h-96 w-52'>
            <a>test</a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}