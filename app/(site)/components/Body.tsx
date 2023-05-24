
import Image from 'next/image'
import React from 'react'
import "../../globals.css"
import B from '@/app/svg/B'
import Blur from './Blur'
import Example from './Example'
import Truster from './Truster'
import Tools from './Tools'
import Link from 'next/link'
import { BsGithub, BsGoogle, BsLinkedin, BsDiscord, BsInstagram } from "react-icons/bs"
const Body = () => {
	return (
		<div className=' w-full h-fit pt-20'>
			<div className='flex flex-row justify-between w-full h-[85vh]'>
				<div className=' w-[50%]  left-0 top-0 flex justify-center items-center h-full'>
				</div>
				<div className='w-[50%] text-center h-full'>
					<p className="logo-text text-[80px]   ml-4 mt-16">Brocode</p>
					<p className="text-[40px]  ml-4">Become a full stack designer</p>
					<div className="flex flex-row gap-4 justify-center">
						<p className='flex flex-row items-center text-[#ffffff4d]'>Web based</p>
						<p className='flex flex-row items-center text-[#ffffff4d]'>Fast Code Generation</p>
						<p className='flex flex-row items-center text-[#ffffff4d]'>Community</p>
						<p className='flex flex-row items-center text-[#ffffff4d]'>Collaboration</p>
					</div>
					<div className='flex flex-row mt-5 gap-10 ml-4 justify-center'>
						<a href='' className='px-4 py-2 border-[2px] rounded-full'>Why Brocode</a>
						<a href='' className='px-10 py-2  rounded-full bg-[#646cff]'>Get Started</a>
					</div>
				</div>
			</div>
			<div className=" py-[100px] text-center">
				<p className="text-[40px]  text-center">Explore latest Examples</p>
				<div className='py-[20px] flex flex-row justify-center gap-3 	'>
					<Example image='/images/example1.png' link='' title='3d text' />
					<Example image='/images/example2.png' link='' title='Interactive Designs' />
					<Example image='/images/example3.png' link='' title='Iphone 13 mockup' />
					<Example image='/images/example4.png' link='' title='3d Text' />
				</div>
				<a href='' className='px-20 py-2  my-[55px]  rounded-full bg-[#646cff]'>See all Examples</a>
			</div>
			<div className='text-center py-4'>
				<p className='text-[40px]  text-[#ffffff4d] my-4'>Trusted by</p>
				<div className="flex flex-row justify-center gap-3">
					<Truster image='/svg/truster1.svg' link='' />
					<Truster image='/svg/truster2.svg' link='' />
					<Truster image='/svg/truster3.svg' link='' />
					<Truster image='/svg/truster4.svg' link='' />
					<Truster image='/svg/truster5.svg' link='' />
				</div>
			</div>
			<div className='flex flex-col items-center text-center py-10'>
				<p className="text-[40px] text-[#fff] my-4">
					Developing Websites from designs was never easy
				</p>
				<p className="text-[25px] text-[#ffffff4d]">
					Develop a whole full-stack project <br /> without writting any codes by just desiging
				</p>
				<video src='https://cdn.spline.design/_assets/_videos/spline_beta_release.mp4' autoPlay muted className='my-2 rounded-3xl w-full'></video>
			</div>
			<div className='flex flex-col items-center py-10'>
				<p className="text-[40px] text-[#fff] my-4">
					Tools to accomplish you work easy and enjoyful
				</p>
				<p className="text-[25px] text-[#ffffff4d] text-center">
					Brocode is a web development environment <br />that allows users to work, learn, and share their code.
				</p>
				<div className='flex flex-row justify-center flex-wrap gap-5 my-4'>
					<Tools image='/images/tool1.jpg' title="Realtime Collaboration" link='' description='Work with your team in real-time and set individual permissions' />
					<Tools image='/images/tool2.jpg' title="3d Modelling" link='' description='Parametric objects,polygonal editing and more' />
					<Tools image='/images/tool3.jpg' title="Animation" link='' description='Give life to your 3d objects' />
					<Tools image='/images/tool4.jpg' title="Interactive Experiences" link='' description='Enable Interactiviy in your project' />
					<Tools image='/images/tool5.jpg' title="Material Layers" link='' description='Fine-tune the look of your models' />
					<Tools image='/images/tool6.jpg' title="3d Sclupting" link='' description='Create organic shapes' />
				</div>
			</div>
			<div className='flex flex-col items-center py-10'>
				<p className="text-[40px] text-[#fff] my-4">
					And there is more!
				</p>
				<p className="text-[25px] text-[#ffffff4d]">
					Brocode is consitantly growing just like the responsibilities of what you can achieave
				</p>
			</div>
			<div className='flex flex-col items-center text-center py-10'>
				<p className="text-[40px] text-[#fff] my-4">
					Create and Collaborate in realtime
				</p>
				<p className="text-[25px] text-[#ffffff4d]">
					Add comments,Invite your team or share a link!<br /> Brocode is best for large groups
				</p>
				<video src='https://cdn.spline.design/_assets/_videos/spline_beta_release.mp4' autoPlay muted className='my-2 rounded-3xl w-full'></video>
			</div>
			<div className='flex flex-col items-center text-center py-10'>
				<p className="text-[40px] text-[#fff] my-4">
					Test your projects as in Development mode
				</p>
				<p className="text-[25px] text-[#ffffff4d]">
					Brocode provides a feature of testing the project you are working on
				</p>
				<video src='https://cdn.spline.design/_assets/_videos/spline_beta_release.mp4' autoPlay muted className='my-2 rounded-3xl w-full'></video>
				<div className=' flex flex-row gap-2'>
					<div className='rounded-[10px] bg-[#191a1e] py-2 px-4'>HTML</div>
					<div className='rounded-[10px] bg-[#191a1e] py-2 px-4'>React</div>
					<div className='rounded-[10px] bg-[#191a1e] py-2 px-4'>WebFlow</div>
					<div className='rounded-[10px] bg-[#191a1e] py-2 px-4'>Vuejs</div>
					<div className='rounded-[10px] bg-[#191a1e] py-2 px-4'>NextJS</div>
					<div className='rounded-[10px] bg-[#191a1e] py-2 px-4'>HTML</div>
				</div>
			</div>
			<div className='flex flex-col items-center text-center py-10'>
				<p className="text-[40px] text-[#fff] my-4">
					Get Brocode Now
				</p>
				<p className="text-[25px] text-[#ffffff4d]">
					Brocode is available for  every Operating System
				</p>
				<div className=' flex flex-row gap-2'>
					<div className='rounded-[10px] bg-[#191a1e] py-10 px-10 '>Windows</div>
					<div className='rounded-[10px] bg-[#191a1e] p-10'>Browser</div>
					<div className='rounded-[10px] bg-[#191a1e] p-10'>Linux</div>
					<div className='rounded-[10px] bg-[#191a1e] p-10'>MacOS</div>
				</div>
			</div>
			<div className='flex flex-col items-center text-center py-10'>
				<p className="text-[40px] text-[#fff] my-4">
					Loved by people all around the world
				</p>
				<p className="text-[25px] text-[#ffffff4d]">
					Web Developers all over the world love Brocode due to how it makes work easy
				</p>
				<div className=' flex flex-row gap-2 my-20'>
					<div className='rounded-[10px] bg-[#191a1e] py-10 px-10  w-[500px] h-[300px]   flex flex-col justify-center  items-center p-4'>
						<div className='flex flex-row items-center gap-3'>
							<Image src="" alt="image" width={60} height={60} className="rounded-full border-[2px]" />
							<div>
								<p className='text-[25px]'>Mugisha Yves</p>
								<p className='text-[#ffffff4d] text-[15px]'>Software Developer</p>
							</div>
						</div>
						<p>“As a designer who has always worked in 2D spaces, Spline is the first 3D design software I was able to feel comfortable with and pick up with ease.”</p>
					</div>
					<div className='rounded-[10px] bg-[#191a1e] py-10 px-10  w-[500px] h-[300px]  flex flex-col  justify-center items-center'>
						<div className='flex flex-row items-center gap-3 '>
							<Image src="" alt="image" width={60} height={60} className="rounded-full border-[2px]" />
							<div>
								<p className='text-[25px]'>Mugisha Yves</p>
								<p className='text-[#ffffff4d] text-[15px]'>Software Developer</p>
							</div>
						</div>
						<p>“As a designer who has always worked in 2D spaces, Spline is the first 3D design software I was able to feel comfortable with and pick up with ease.”</p>
					</div>
					<div className='rounded-[10px] bg-[#191a1e] py-10 px-10  w-[500px] h-[300px]  flex flex-col  justify-center items-center'>
						<div className='flex flex-row items-center gap-3'>
							<Image src="" alt="image" width={60} height={60} className="rounded-full border-[2px]" />
							<div>
								<p className='text-[25px]'>Mugisha Yves</p>
								<p className='text-[#ffffff4d] text-[15px]'>Software Developer</p>
							</div>
						</div>
						<p>“As a designer who has always worked in 2D spaces, Spline is the first 3D design software I was able to feel comfortable with and pick up with ease.”</p>
					</div>
				</div>
				<div className='flex flex-row gap-2 justify-center'>
					<div className='w-[10px] h-[3px] bg-white' />
					<div className='w-[10px] h-[3px] bg-[#191a1e]' />
					<div className='w-[10px] h-[3px] bg-[#191a1e]' />
				</div>
			</div>
			<div className='flex flex-row justify-between py-10'>
				<div className=''>
					<Link href={""}>
						<Image src="/Brocode.svg" alt="logo" width={150} height={150} />
					</Link>
				</div>
				<div className=''>
					<p>Products</p>
					<p className='text-[#ffffff4d]'>Features</p>
					<p className='text-[#ffffff4d]'>Community</p>
					<p className='text-[#ffffff4d]'>Download</p>
				</div>
				<div className=''>
					<p>Resources</p>
					<p className='text-[#ffffff4d]'>Docs</p>
					<p className='text-[#ffffff4d]'>Examples</p>
					<p className='text-[#ffffff4d]'>Tutorials</p>
				</div>
				<div className=''>
					<p>Contacts</p>
					<p className='text-[#ffffff4d]'>yvesmugisha@gmail.com</p>
					<p className='text-[#ffffff4d]'>+250798667792</p>
				</div>
			</div>
			<div className='flex flex-row justify-between py-4 border-t-[3px] border-[#2a2b2e] pb-20'>
				<div>
					&copy; 2023 - Brocode.Inc
				</div>
				<div className='flex flex-row items-center gap-4'>
					<Link href={""} >
						<BsGoogle size={30} />
					</Link>
					<Link href={""}>
						<BsGithub size={30} />
					</Link>
					<Link href={""}>
						<BsLinkedin size={30} />
					</Link>
					<Link href={""}>
						<BsDiscord size={30} />
					</Link>
					<Link href={""}>
						<BsInstagram size={30} />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Body