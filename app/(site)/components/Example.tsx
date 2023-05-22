        
import Image from "next/image";

interface ExampleProps{
        image:string;
        link:string;
        title:string
}

const Example:React.FC<ExampleProps> = ({
        image,
        link,
        title
}) => {
  return (
    <a href={link} className="hover:scale-105 transition p-2  text-center">
        <Image alt={title} src={image} width={200} height={200}  className="rounded-[10px] hover:outline-[2px] hover:outline-blue-500 "/>
        <p className="mt-2">{title}</p>
    </a>
  )
}

export default Example