import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Navbar() {
    return (
        <nav>
      <div className="logo" >
       <Image src="/ninja.jpg" width={128} height={90} />
      </div>
      <Link href='/'><a>Home</a></Link>
      <Link href='/about'><a>About</a></Link>
      <Link href='/ninjas'><a>Developers Listing</a></Link>
    </nav>
    )
}
