import Body from "./components/Body"
import Navbar from "./components/Navbar"

const page = () => {
	return (
		<div className="w-screen overflow-x-hidden">
			<div className="flex justify-center overflow-x-hidden">
				<Navbar />
				<div className=" w-full mx-[5vw] ">
					<Body />
				</div>
			</div>
		</div>
	)
}

export default page