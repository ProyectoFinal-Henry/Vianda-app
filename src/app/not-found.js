import Image from "next/image";

const NotFound = () => {
    return(
        <>
        <div className="flex flex-col items-center justify-center text-center min-h-screen min-w-screen text-4xl">
            ¡Ups!
            <Image src="/notFound.png"
            className="mt-12 mb-12"
            alt="notFound4"
            width={500}
            height={500}
            ></Image>
        Parece que la página a la cual intentas ingresar no existe.
        </div>
        </>
    )
}

export default NotFound
