import React from 'react'
import { BsGoogle } from 'react-icons/bs'

const Form = () => {
  return (
    <form>
        <div className="">
                <p>Welcome to Brocode</p>
                <p>Sign In</p>
        </div>
        <div className="bg-[] rounded-2xl flex flex-row items-center">
                <BsGoogle />
                <p></p>
        </div>
    </form>
  )
}

export default Form