import Link from 'next/link'

export default function Page() {
  return (
    <main>
      <h1>Hello, Home Page!</h1>
      <Link href="/dashboard" className="rounded-md border bg-red-400 shadow-sm active:bg-card/75 flex justify-center items-center gap-2 p-2 w-20">
      <p className="text-sm">Dashboard</p>
      </Link>
    </main>
  )
}