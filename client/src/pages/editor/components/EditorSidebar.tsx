import AccountAvatar from './AccountAvatar'
import SidebarLink from './NavbarLink'
import { SidebarLinkProps } from '../../../utils/types'

const EditorSidebar = () => {
        const sidebarUpper:SidebarLinkProps[] = [
		{
			icon:"/svgs/home.svg",
			title:"Home",
			to:"/"
		},{
			icon:"/svgs/myfiles.svg",
			title:"My files",
			to:"/my-files"
		},{
			icon:"/svgs/shared.svg",
			title:"Shared with me",
			to:"/shared"
		},{
			icon:"/svgs/community.svg",
			title:"Community",
			to:"/community"
		},{
			icon:"/svgs/tutorials.svg",
			title:"Tutorials",
			to:"/tutorials"
		},{
			icon:"/svgs/library.svg",
			title:"Library",
			to:"/library"
		},{
			icon:"/svgs/inbox.svg",
			title:"Inbox",
			to:"/inbox"
		}
	]
        return (
                <div className="w-[20vw] p-5">
                        <AccountAvatar name='Broony' />
                        <div className='bg-[#FFFFFF08]  px-3 py-2 my-3 rounded-xl'>
                                {sidebarUpper.map((comp, index) => {
                                        return (
                                                <SidebarLink key={index} title={comp.title} icon={comp.icon} to={comp.to} />
                                        )
                                })}
                        </div>
                </div>
        )
}

export default EditorSidebar