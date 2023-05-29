"use client"

import B from '@/app/svg/B'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsGoogle } from 'react-icons/bs'

const Form = () => {
	return (
		<form className='text-center flex  flex-col justify-center'>
			<B width={250} height={250} />
			<div className="">
				<p>Welcome to Brocode</p>
				<p>Sign In</p>
			</div>
			<div className="bg-[] rounded-2xl flex flex-row items-center py-2 gap-4">
				<BsGoogle />
				<p>Continue with Google</p>
			</div>
			<input type='text' placeholder='Email' className="text-center bg-[] py-2 w-full" />
			<input type='submit' value="Sign In" className="py-2" />
		</form>
	)
}

export default Form