import { ExpandIcon, LucideFacebook, LucideGithub, LucideLinkedin, LucideTwitter, ScreenShare } from "lucide-react";

export  function Footer(){
 return(
    <>
    <div className="flex px-5  py-6 md:px-[100px] text-white  bg-transparent ">
        <div className="flex space-x-3  flex-grow ">
        <LucideLinkedin/>
        <LucideFacebook/>
        <LucideGithub/>
        <LucideTwitter/>
        </div>
        <ExpandIcon/>
    </div>
    </>
 )
}