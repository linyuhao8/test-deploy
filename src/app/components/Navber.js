import Link from "next/link"
const Navbar = () => {
    return (

<div className="flex justify-center border-b gap-4">
  <Link href="/" passHref className="bg-gray-300 py-1 px-3">
   SSR渲染
  </Link>
  <Link href="/csr" passHref className="bg-gray-300 py-1 px-3">
    CSR渲染
  </Link>
</div>
    )
}

export default Navbar