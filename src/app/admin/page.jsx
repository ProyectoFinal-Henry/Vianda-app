import Link from "next/link"

export default function AdminHomePage() {
  return (
    <>
      <h1>Esto es Admin </h1>
      <p>Aqui se mostrara una bienvenida al aplicativo y en el futuro algunas visatas</p>

      <Link
        className="link"
        href="/admin/viandas"
      >
        {" "}
        Administrar viandas{" "}
      </Link>
    </>
  )
}
