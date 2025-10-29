"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Globe, X } from 'lucide-react';
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
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    
    return(
    <>
        <div className="flex items-center justify-between md:text-2xl font-medium w-full bg-gray-950 opacity-40 text-white px-5 md:py-6 py-6 md:px-[100px]">
            {/* Mobile: Drawer Icon */}
            <div className="md:hidden">
                <button onClick={() => setIsDrawerOpen(true)} className="text-white">
                    <Menu size={28} />
                </button>
            </div>

            {/* Desktop: Navigation Links */}
            <div className="hidden md:flex md:space-x-5">
                {menus.map((item, key)=>{
                    const AccentColor = currentPath === item.path ? "#0083df":"" ;
                    return(
                        <Link  style={{ color:AccentColor }} key={key} title={item.title} className="flex text-white hover:text-[#0083df]" href={item.path}>{item.title}</Link>
                    )
                })}
            </div>

            {/* Mobile: Translation Icon */}
            <div className="md:hidden">
                <button className="text-white">
                    <Globe size={28} />
                </button>
            </div>
        </div>

        {/* Drawer Menu */}
        {isDrawerOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-70 z-40 md:hidden" onClick={() => setIsDrawerOpen(false)}>
                <div className="fixed top-0 left-0 h-full w-64 bg-gray-950 z-50 p-5" onClick={(e) => e.stopPropagation()}>
                    <div className="flex justify-end mb-5">
                        <button onClick={() => setIsDrawerOpen(false)} className="text-white">
                            <X size={28}/>
                        </button>
                    </div>
                    <nav className="flex flex-col space-y-4">
                        {menus.map((item, key) => (
                            <Link 
                                key={key} 
                                href={item.path}
                                className={`text-xl ${currentPath === item.path ? 'text-[#0083df]' : 'text-white'} hover:text-[#0083df]`}
                                onClick={() => setIsDrawerOpen(false)}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        )}
    </>
    );
}