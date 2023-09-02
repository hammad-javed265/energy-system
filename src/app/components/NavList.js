"use client";
import React from 'react'
import Link from 'next/link';
import Dropdown from '../components/Dropdown';
import { usePathname } from "next/navigation";
import LogoutButton from './sidebar/LogoutButton';

function NavList() {
  const pathname = usePathname();
  return (
    <nav className="bg-[#166079] flex rounded-2xl ">
      <div className='w-[97%]'>
        <ul className="flex sm:space-x-[3%] md:space-x-[5%] p-4 max-sm:text-[10px]">
          <li className={`${pathname == "/home" ? "bg-[#E2E8F0] text-[#000000] rounded" : "text-[#E2E8F0]"}`}>
            <Dropdown title={"Dashboard"} adjust={'w-48'}>
              <Link href="/home"><li>Plant Summary</li></Link>
              <Link href="/comparision"><li>Energy Comparision</li></Link>
            </Dropdown>
          </li>
          <li className={pathname == "/sld" || pathname == "/sankey" ? "bg-[#E2E8F0] text-[#000000] rounded" : "text-[#E2E8F0]"}>
            <Dropdown title={"Diagram"} adjust={'w-48'}>
              <Link href="/sld"><li>SLD</li></Link>
              <Link href="/sankey"><li>Sankey Diagram</li></Link>
            </Dropdown>
          </li>
          <Link href="/trend">
            <li className={pathname == "/trend" ? "bg-[#E2E8F0] text-[#000000] rounded" : "text-[#E2E8F0]"}>
              <p className="px-2 py-1 rounded">Customized Trends</p>
            </li>
          </Link>
          <li className={pathname == "/report" ? "bg-[#E2E8F0] text-[#000000] rounded" : "text-[#E2E8F0]"}>
            <Dropdown title={"Reports"} adjust={'w-48'}>
              <Link href="/report"><li>Energy Usage Report</li></Link>
              <Link href="/report"><li>Energy Cost Report</li></Link>
            </Dropdown>
          </li>
        </ul>
      </div>
      <div>
      <Dropdown img = {<img src="https://res.cloudinary.com/dy6ncsfte/image/upload/v1693572280/ProfilePic/zhrqldvvvcbavx6iugdg.png" alt="" width="50px" height="50px" ></img>} adjust={'ml-[-30px]'}>
              <Link href="/profile"><li>View Profile</li></Link>
              <li><LogoutButton></LogoutButton></li>
            </Dropdown>
      </div>
    </nav>
  )
}

export default NavList