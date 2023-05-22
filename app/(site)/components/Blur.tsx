import B from "@/app/svg/B"
import "../../globals.css"

const Blur = () => {
        return (
                <div className=" relativeflex flex-col items-center justify-center">
                        <div className=" h-full  w-full bg-div blur-[72px] ">
                        <div className="absolute right-[200px] top-[100px] ">
                                <B width={400} height={400}  />
                        </div>
                        </div>
                </div>
        )
}

export default Blur