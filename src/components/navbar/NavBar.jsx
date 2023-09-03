import Link from 'next/link';

function NavBar() {
  return (
    <nav className= "tp-nav bg-primary">
        <div className="container mx-auto flex justify-between items-center px-3">
            <h3 className='font-quicksand'>ViandApp</h3>
            <div className="form-control">
                  <input type="text" placeholder="Buscar" className="input input-bordered-none w-50 " />
                </div>
                <ul className='flex text-lg font-quicksand'>
                <li className='btn btn-primary'>
                  <Link href="/registrarse">Registrarse</Link>
                </li>
                <li className='btn btn-primary'>
                  <Link href="/ingresar">Ingresar</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar