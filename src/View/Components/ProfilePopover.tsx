import { Popover, Transition } from '@headlessui/react'
import { ReactComponent as AccountIcon } from '../Images/AccountIcon.svg'
import LogoutButton from './LogoutButton'
import useCurrentUserRoles from '../../Hooks/UseCurrentUserRoles'
import RoleDisplay from './RoleDisplay'

interface Props {
  isAuthenticated: Boolean
  userPicture: string | undefined
}

export default function ProfilePopover({ isAuthenticated, userPicture }: Props) {

  if (!isAuthenticated) {
    return <AccountIcon className='h-10 w-auto ml-2' fill='#2bc0d3' />
  }

  const [ roles, loadingRoles ] = useCurrentUserRoles()
  return (
    <Popover>
      <Popover.Button className='ml-2 mr-1 h-max p-1 rounded-full outline-0 hover:bg-white hover:bg-opacity-20 active:bg-opacity-25 duration-300'>
        {userPicture === undefined && <AccountIcon className='h-10 w-auto' fill='#2bc0d3' />}
        {userPicture !== undefined && <img src={userPicture} className='h-10 w-auto rounded-full '></img>}
      </Popover.Button>
      <Transition
        enter="transition fade-in duration-75"
        enterFrom="opacity-50"
        enterTo="opacity-100"
      >
        <Popover.Panel>
          <div className='h-40 w-40 bg-MCS-DarkerBlue flex flex-col justify-between 
          items-center rounded-xl absolute top-16 right-8 shadow-md'
          >
            <RoleDisplay roles={roles} loadingRoles={loadingRoles}></RoleDisplay>
            <LogoutButton></LogoutButton>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}