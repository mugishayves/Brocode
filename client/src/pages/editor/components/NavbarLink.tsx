import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { SidebarLinkProps } from '../../../utils/types'



const SidebarLink: React.FC<SidebarLinkProps> = ({ icon ,to,title}): ReactElement => {
        return (
                <Link to={to} className='flex flex-row gap-5 hover:bg-[#FFFFFF08] px-3 py-1.5 rounded-md'>
                        <img src={icon} />
                        <p>{title}</p>
                </Link>
        )
}

export default SidebarLink