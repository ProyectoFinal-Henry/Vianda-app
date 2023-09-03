import Link from "next/link"

function Footer() {
  return ( <div className="btm-nav"> 
    <footer className="footer footer-center bg-primary ">
   <div className="">
   <ul className='flex gap-x-2 text-lg font-quicksand'>
                <li className='btn btn-primary'>
                <Link href="/">Home</Link>
                </li>
                <li className='btn btn-primary'>
                <Link href="/about">Acerca de Nosotros</Link>
                </li>
                <li className='btn btn-primary'>
                <Link href="/carta">Carta</Link>
                </li>
            </ul> 
  </div> 
    </footer></div>
  )
}

export default Footer
