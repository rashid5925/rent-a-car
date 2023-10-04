'use client'
import Link from "next/link";
import Image from "next/image";
import { usePathname} from 'next/navigation';
export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav className="grid grid-cols-12 justify-items-center content-center w-full h-[100px] text-[#012641]">
            <div className="col-span-3 flex items-center text-[32px] font-bold ms-[10px] justify-center">
                <div className="relative w-24 h-24">
                    <Link href="/">
                        <Image className="rounded-full border border-gray-100 shadow-sm" src="/logo.png" alt="user image" width={94} height={94}></Image>
                    </Link>
                </div>
            </div>
            <div className="col-span-6 flex items-center">
                <ul className="list-none text-[18px]">
                    <li className={pathname === '/'?"inline-block p-1 m-3 cursor-pointer hover:text-[#60B3D1] active":"inline-block p-1 m-3 cursor-pointer hover:text-[#60B3D1]"}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={pathname === '/about'?"inline-block p-1 m-3 cursor-pointer hover:text-[#60B3D1] active":"inline-block p-1 m-3 cursor-pointer hover:text-[#60B3D1]"}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={pathname === '/cars'?"inline-block p-1 m-3 cursor-pointer hover:text-[#60B3D1] active":"inline-block p-1 m-3 cursor-pointer hover:text-[#60B3D1]"}>
                        <Link href="/cars">All Cars</Link>
                    </li>
                    <li className="inline-block p-1 m-3 cursor-pointer hover:text-[#60B3D1]">
                        <Link href="#">Contact Us</Link>
                    </li>
                </ul>
            </div>
            <div className="col-span-3 flex items-center text-[18px]">
                <button className="bg-[#60B3D1] text-white px-6 py-1.5 mx-2 rounded-md hover:opacity-80">Register</button>
                <button className="text-[#60B3D1] mx-2 login-btn hover:opacity-80"><span>Login </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#60B3D1" viewBox="0 0 24 24" strokeWidth={1.5} 
                        stroke="#60B3D1" className="inline-block w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" 
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};
