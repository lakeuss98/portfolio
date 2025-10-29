"use client"
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
export  function NavBar({}:{}){
    const menus = [
        {
            title:"Home",
            path:"/",
        },
        {
            title:"About",
            path:"/about",
        },
        {
            title:"Resume",
            path:"/resume",
        },
        {
            title:"Projets",
            path:"/projet",
        }
    ]
    const currentPath =  usePathname();
    //const param = useParams()
    
    return(<>
    <div className="flex md:text-2xl font-medium w-full bg-gray-950 opacity-40 space-x-2  text-white md:space-x-5 px-5 md:py-6 py-6 md:px-[100px] ">
        {menus.map((item, key)=>{
            const AccentColor = currentPath === item.path ? "#0083df":"" ;
          return(
            <Link  style={{ color:AccentColor }} key={key} title={item.title} className="flex  text-white hover:text-[#0083df] " href={item.path}>{item.title}</Link>

          )
        })}

    </div>
    </>);
}