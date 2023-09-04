import Link from "next/link"

function Footer() {
  return ( 
    <footer className= "footer footer-center bg-accent">
   <div className="bg-accent">
   <ul className='flex gap-x-2 text-lg font-bold'>
                <li className='btn btn-accent text-lg font-bold'>
                <Link href="/catalog/home">Home</Link>
                </li>
                <li className='btn btn-accent text-lg font-bold'>
                <Link href="/catalog/home">Acerca de ViandApp</Link>
                </li>
                <li className='btn btn-accent text-lg font-bold'>
                <Link href="/catalog/home">Carta</Link>
                </li>
            </ul> 
  </div> 
    </footer>
  )
}

export default Footer
