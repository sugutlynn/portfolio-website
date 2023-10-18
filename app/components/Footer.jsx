import Image from "next/image";


const Footer = () => {
    return ( 
        <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-b-0 border-r-transparent text-white">
        <div className="container flex p-10 justify-between">
               <Image src="/finalLogo.png" alt="LOGO" width={150} height={10} />
                <p className="text-slate-600 p-6">All rights reserved.</p>
            </div>
        </footer>
     );
}
 
export default Footer;