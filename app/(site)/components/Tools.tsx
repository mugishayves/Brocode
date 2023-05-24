"use client"

import Image from "next/image";

interface ToolsProps {
        image: string;
        title: string;
        description: string;
        link: string
}
const Tools: React.FC<ToolsProps> = ({ image, title, description, link }) => {
        return (
                <a href={link} className="bg-[#191a1e] w-[500px] height-[400px] p-2 rounded-3xl text-center">
                        <Image alt={title} src={image} width={800} height={800} />
                        <div className="my-4">
                                <p className="text-[25px] text-[#fff]  ">{title}</p>
                                <p className="text-[15px] text-[#ffffff4d] text-center">{description}</p>
                        </div>  
                </a>
        )
}

export default Tools