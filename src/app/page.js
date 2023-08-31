import Link from "next/link"

export default function Home() {
  return (
    <>
      <Link
        rel="stylesheet"
        href="/admin"
      >
        Admin
      </Link>
      <div className="flex gap-x-2">
        <div className=" p-1 bg-primary">primary</div>
        <div className=" p-1 bg-secondary">secondary</div>
        <div className=" p-1 bg-accent">accent</div>
        <div className=" p-1 bg-neutral text-base-100 border-2 border-green-600">neutral</div>
        <div className=" p-1 bg-base-100 border-2 border-green-600">base</div>
        <div className=" p-1 bg-Info">Info</div>
        <div className=" p-1 bg-success">success</div>
        <div className=" p-1 bg-warning">warning</div>
        <div className=" p-1 bg-error">error</div>
      </div>
    </>
  )
}
