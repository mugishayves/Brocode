"use client"
import Link from 'next/link'
import React from 'react'
import Image from "next/image"
const Navbar = () => {
	return (
		<div className='w-[90vw] mx-5 mt-2 rounded-3xl  fixed bg-[rgba(18,19,22,.8)] flex flex-row items-center border-[2px] justify-between px-8'>
			<div className='flex flex-row items-center'>
				<Link href={""}>
					<Image src="/Brocode.svg" alt="logo" width={150} height={150} />
				</Link>
				<ul className='flex flex-row gap-5 text-[#ffffff66]'>
					<li>
						<Link href={""}>Features</Link>
					</li>
					<li>
						<button>
							<span>Resources</span>
						</button>
					</li>
					<li>
						<Link href={""}>Examples</Link>
					</li>
				</ul>
			</div>
			<div className='flex flex-row gap-8 items-center'>
				<a href='' className='px-4  py-2 bg-[#ffffff0d] h-fit rounded-full'>Sign In</a>
				<a href='' className='px-4  py-2 bg-[#ffffff33] h-fit rounded-full'>Get Started</a>
			</div>
		</div>
	)
}

export default Navbar