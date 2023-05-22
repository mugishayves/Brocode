import Image from "next/image";

interface TrusterProps{
        image:string;
        link:string;
}
const Truster:React.FC<TrusterProps> = ({
        image,
        link
}) => {
  return (
    <a href={link} className="bg-[#3f3f3f] rounded-md flex items-center justify-center  p-5">
        <Image alt={link} src={image} width={150} height={150} />
    </a>
  )
}

export default Truster