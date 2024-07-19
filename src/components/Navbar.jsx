import { useState } from 'react'
import MMButton from './MMButton'
import Image from 'next/image'
import Navlist from './Navlist'

function Navbar({ className }) {
	const [isOpen, setIsOpen] = useState(false)

	function openMenu() {
		setIsOpen(true)
	}

	function closeMenu() {
		setIsOpen(false)
	}

	return (
		<nav
			className={`fixed z-50 flex w-full flex-col items-center justify-between py-2 pl-[16px] pr-[32px] backdrop-blur-sm transition-all duration-[250ms] ease-in-out ${isOpen ? 'bg-black/90' : 'bg-black/20'} ${className}`}
		>
			<div className="relative flex w-full items-center justify-between">
				<a href="#">
					<Image
						className="h-10 w-auto md:h-[48px] md:w-auto"
						src="/degenlogo.png"
						width={2048}
						height={585}
						alt="Bill logo"
					/>
				</a>
				<Navlist onClick={closeMenu} className={`hidden text-[22px] lg:flex`} />
				<a
					className="absolute left-1/2 hidden -translate-x-1/2 text-nowrap rounded-full border border-white px-8 py-2 text-[18px] transition duration-300 ease-in-out hover:bg-black/25 md:block lg:relative lg:left-auto lg:translate-x-0"
					href="https://dexscreener.com/solana/ffaoneyajfqzvb2a9mef3dx5bwvu1cxshj4fi1cg9arq"
					target="_blank"
				>
					Buy Now
				</a>
				<MMButton
					isOpen={isOpen}
					closeMenu={closeMenu}
					openMenu={openMenu}
					className={`h-[33px] w-[33px] lg:hidden`}
				/>
			</div>
			<div
				className={`flex w-full items-center justify-center overflow-hidden rounded-bl-xl rounded-br-xl duration-[250ms] ease-in-out ${isOpen ? 'h-[50vh]' : 'h-0'}`}
			>
				<Navlist
					onClick={closeMenu}
					className={`flex-col items-center pt-8 text-[22px] transition duration-[250ms] ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}
				/>
			</div>
		</nav>
	)
}

export default Navbar
