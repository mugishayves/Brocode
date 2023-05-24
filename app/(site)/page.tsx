import Body from "./components/Body"
import Navbar from "./components/Navbar"
import "../globals.css"
import B from "../svg/B"
const page = () => {

	return (
		<div className="relative w-screen overflow-x-hidden">
			<div className="absolute flex items-center justify-center left-[-300px] top-10 w-full h-[100vh]">
				<div className="bg-div w-[30%] h-[50%] blur-[72px]" />
			</div>
			<div className='absolute left-32 top-28 '>
				<B width={500} height={500} />
			</div>
			<div className="flex justify-center overflow-x-hidden">
				<Navbar />
				<div className="w-full mx-[10vw] ">
					<Body />
				</div>
			</div>
		</div>
	)
}

export default page