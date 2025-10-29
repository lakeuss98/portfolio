"use client"
import Image from "next/image";
import bg from "../../public/bg_pc_right.jpeg"
export default function Home() {
  return (
    <div  style={{  backgroundImage:"../../public/bg_pc_right.jpeg", }} className="  flex-grow px-5 md:px-0 grid grid-cols-1 md:grid-cols-2 h-full bg-transparent ">
      <main className="flex md:px-[100px] flex-col md:pb-[10%] " >
        <div className="flex flex-col md:justify-center md:w-fit  flex-grow  text-white ">
        <span className="flex justify-center md:py-0 space-x-3 md:space-x-0 md:justify-between font-bold text-3xl  md:text-5xl " > <span>ANDRÉ</span><span>NGONGANG</span> </span>
        <div className="flex justify-center space-x-3 md:space-x-0 bg-red-  font-extrabold text-5xl md:text-7xl  " >DJEPGANG .K</div>
        <div className="flex justify-center space-x-3 py-3 md:py-0 md:space-x-0 font-extralight md:justify-between text-accent md:text-4xl "> <span>Front-end </span> <span>Web</span>  <span>Developper</span> </div>
        <div className="flex flex-col md:flex-row  gap-y-6 md:space-x-0 pt-5 md:py-9 md:mt-6 justify-between  text-[#0083df] text-2xl ">
           <div title="Resume of all realisation " className="flex items-center justify-center cursor-pointer hover: hover:animate-none px-9 rounded-xl py-3 md:border-2 border border-[#0083df] bg-transparent "> Resume </div>
           <div title="stack overflow " className="flex cursor-pointer items-center justify-center px-9 rounded-xl py-3 md:border-2 border border-[#0083df] bg-transparent "> Portofolio </div>

        </div>
        </div>
        <div title="Citation inspirante" className="md:flex hidden md:text-2xl text-gray-500 "> <cite>
        " l'éfficacité reside dans la simplicité de l'action <br /> et ou de la conception "
        </cite>
       </div>
      </main>
      <main className="flex md:px-[100px] flex-col justify-center" >
        <img className="  " title="Image André" src="moi.png" alt="image andre" />
         {/* <Image width={500} height={500} src="https://g.co/gemini/share/3f6c231e37f4" alt="image andre" /> */}
      </main>
      <div title="Citation inspirante" className="flex justify-center  text-center md:hidden text-gray-500 "> <cite>
        " l'éfficacité reside dans la simplicité de l'action <br /> et ou de la conception "

        </cite>
       </div>
    </div>
  );
}
