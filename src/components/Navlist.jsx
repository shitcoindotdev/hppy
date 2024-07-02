function Navlist({ className, onClick }) {
	return (
		<ul className={`lg: flex w-full text-center lg:justify-center ${className}`}>
			<li
				onClick={onClick}
				className="w-full rounded-xl py-2 transition duration-300 ease-in-out hover:bg-black/25 lg:w-fit lg:px-3"
			>
				<a href="#home">home</a>
			</li>
			<li
				onClick={onClick}
				className="w-full rounded-xl py-2 transition duration-300 ease-in-out hover:bg-black/25 lg:w-fit lg:px-3"
			>
				<a href="#about">about</a>
			</li>
			<li
				onClick={onClick}
				className="w-full rounded-xl py-2 transition duration-300 ease-in-out hover:bg-black/25 lg:w-fit lg:px-3"
			>
				<a href="#tokenomics">tokenomics</a>
			</li>
			<li
				onClick={onClick}
				className="w-full rounded-xl py-2 transition duration-300 ease-in-out hover:bg-black/25 lg:w-fit lg:px-3"
			>
				<a href="#roadmap">roadmap</a>
			</li>
			<li
				onClick={onClick}
				className="w-full rounded-xl py-2 transition duration-300 ease-in-out hover:bg-black/25 lg:w-fit lg:px-3"
			>
				<a href="#howtobuy">how to buy</a>
			</li>
		</ul>
	)
}

export default Navlist
