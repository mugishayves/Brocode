import React from 'react'
import { Link } from 'react-router-dom';
import { AccountAvatarProps } from '../../../utils/types';



const AccountAvatar: React.FC<AccountAvatarProps> = ({ image, name }) => {
        const textPic = name[0];
        function getRandomLightColor(): string {
                const red: number = Math.floor(Math.random() * 56) + 200;
                const green: number = Math.floor(Math.random() * 56) + 200;
                const blue: number = Math.floor(Math.random() * 56) + 200;
                const lightColor: string = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
                return lightColor;
        }

        const bgColor = getRandomLightColor()
        return (
                <div className='flex flex-row  items-center justify-between'>
                        <div className='flex flex-row items-center gap-5'>
                                <div>
                                        {image ? (
                                                <div></div>
                                        ) : (
                                                <div className={`font-extrabold text-xl px-3 py-1 rounded-md`} style={{ backgroundColor: bgColor }}>
                                                        <p>{textPic}</p>
                                                </div>
                                        )}
                                </div>
                                <div className='font-bold'>
                                        {name}
                                </div>
                        </div>
                        <Link to={"/account/settings"} className='bg-opacity-10 backdrop-filter backdrop-blur-lg bg-white  rounded-lg p-2 '>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.35774 2.08205L9.37895 3.12788C9.66555 3.42139 10.0598 3.58471 10.47 3.57982L11.9317 3.56241C12.2125 3.55907 12.4409 3.78755 12.4376 4.06833L12.4202 5.52996C12.4153 5.94015 12.5786 6.33445 12.8721 6.62105L13.918 7.64226C14.1189 7.83844 14.1189 8.16156 13.918 8.35774L12.8721 9.37895C12.5786 9.66555 12.4153 10.0598 12.4202 10.47L12.4376 11.9317C12.4409 12.2125 12.2125 12.4409 11.9317 12.4376L10.47 12.4202C10.0598 12.4153 9.66555 12.5786 9.37895 12.8721L8.35774 13.918C8.16156 14.1189 7.83844 14.1189 7.64226 13.918L6.62105 12.8721C6.33445 12.5786 5.94015 12.4153 5.52996 12.4202L4.06833 12.4376C3.78755 12.4409 3.55907 12.2125 3.56241 11.9317L3.57982 10.47C3.58471 10.0598 3.42139 9.66555 3.12788 9.37895L2.08205 8.35774C1.88114 8.16156 1.88114 7.83844 2.08205 7.64226L3.12788 6.62105C3.42139 6.33445 3.58471 5.94015 3.57982 5.52996L3.56241 4.06833C3.55907 3.78755 3.78755 3.55907 4.06833 3.56241L5.52996 3.57982C5.94015 3.58471 6.33445 3.42139 6.62105 3.12788L7.64226 2.08205C7.83844 1.88114 8.16156 1.88114 8.35774 2.08205Z" stroke="white"></path><rect x="7" y="7" width="2" height="2" rx="1" fill="white"></rect></svg>
                        </Link >
                </div>
        )
}

export default AccountAvatar