import Link from "next/link"
import Image from "next/image"

function NavBar() {
  return (
    <nav className="bg-primary">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-3">
        <Link href="/">
          <Image
            width={150}
            height={100}
            src="/verde.png"
            alt="imagen logo"
          />
        </Link>

        <ul className="flex text-lg font-bold">
          <li className="btn btn-primary font-bold">
            <Link href="/catalog/registro">Registrarse</Link>
          </li>
          <li className="btn btn-primary font-bold">
            <Link href="/catalog/login">Ingresar</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
