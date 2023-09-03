import Link from 'next/link';
import Image from 'next/image';

function NavBar() {
  return (
    <nav className= "bg-primary">
      
        <div className="container mx-auto flex justify-between items-center px-3">
          <Link href="/">
            <Image width={150} height={100} src="/verde.png" alt="imagen logo" />
          </Link>
            <div className="form-control" >
                  <input type="text" placeholder="Buscar" className=" input input-bordered-none" />
                </div>
                <ul className='flex text-lg font-bold'>
                <li className='btn btn-primary font-bold'>
                  <Link href="">Registrarse</Link>
                </li>
                <li className='btn btn-primary font-bold'>
                  <Link href="/catalog/home">Ingresar</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar