import Navbar from "./components/Navbar"

const page = () => {
	return (
		<div className="w-screen overflow-x-hidden">
			<div className="flex justify-center overflow-x-hidden">
				<Navbar />
				<div className="mt-[70px]">
					<Body />
				</div>
			</div>
		</div>
	)
}

export default page