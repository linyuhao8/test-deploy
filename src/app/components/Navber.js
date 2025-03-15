const Navbar = () => {
    return (
        <div className="flex justify-center border-b gap-4">
            <a href="/" className="bg-gray-300 py-1 px-3">SSR渲染</a>
            <a href="/csr"  className="bg-gray-300 py-1 px-3">CSR渲染</a>
        </div>
    )
}

export default Navbar