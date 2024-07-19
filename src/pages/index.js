import BrushedBorder from '@/components/BrushedBorder'
import FAQ from '@/components/FAQ'
import Links from '@/components/Links'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { useIntersection } from 'react-use'

import { useRef } from 'react'

export default function Home() {
	const aboutSectionRef = useRef(null)
	const tokenomicsSectionRef = useRef(null)
	const roadmapSectionRef = useRef(null)
	const howToBuySectionRef = useRef(null)

	const aboutIntersection = useIntersection(aboutSectionRef, {
		root: null,
		rootMargin: '0px',
		threshold: 0.3,
	})

	const tokenomicsIntersection = useIntersection(tokenomicsSectionRef, {
		root: null,
		rootMargin: '0px',
		threshold: 0.3,
	})

	const roadmapIntersection = useIntersection(roadmapSectionRef, {
		root: null,
		rootMargin: '0px',
		threshold: 0.3,
	})

	const howToBuyIntersection = useIntersection(howToBuySectionRef, {
		root: null,
		rootMargin: '0px',
		threshold: 0.3,
	})

	return (
		<main className={`relative flex flex-col overflow-hidden text-white`} style={{ fontFamily: 'Quicksand' }}>
			<Navbar />
			<section
				id="home"
				className="relative flex h-[90vh] w-full flex-col items-center overflow-hidden sm:h-[100vh] md:flex-row"
			>
				<div className="hidden md:block md:w-[50vw]"></div>
				<div className="flex flex-col items-center px-6 pt-20">
					<h1 className="text-[48px] font-extrabold">$Bunny</h1>

					<h2 className="relative z-10 text-center text-[20px] font-medium lg:max-w-[550px] lg:text-[28px]">
						is celebrating the DegenV2 Launch. He just woke up and is ready to gamble his live savings. Moon
						or Dust, Degen forever.
					</h2>

					<Links className="relative z-10 mb-8 mt-8 sm:mb-2" />
					<p className="relative z-10 mb-8 hidden sm:block">CA: tokenaddress</p>
					<a
						className="relative z-10 rounded-full border-2 border-white bg-black/20 px-8 py-3 text-[18px] font-bold backdrop-blur-sm transition duration-300 ease-in-out hover:bg-white/25"
						href="https://www.degen.fund/AQEL43o53yDsuM9XsgHies1CYiiPfPGs4rhnSWDqJGoB"
						target="_blank"
					>
						Buy $Bunny
					</a>
				</div>
				<Image
					className="walking absolute bottom-0 z-0 h-auto w-[85vw] max-w-[420px] lg:max-w-[666px]"
					src="/degenbunny.png"
					width={400}
					height={400}
					alt="degen apu"
				/>
				<BrushedBorder className="bgGradient absolute bottom-0 h-6 w-full fill-white" />
			</section>
			<section
				id="about"
				ref={aboutSectionRef}
				className="relative flex min-h-[90vh] w-full flex-col items-center overflow-hidden px-6 pt-20 sm:min-h-[100vh] md:flex-row md:justify-center"
			>
				<h1 className="sr-only">About</h1>
				<div className="flex flex-col items-center md:max-w-[550px]">
					<Image
						className="relative z-10 mb-4 w-[70vw] md:w-[330px]"
						src="/about.webp"
						height={500}
						width={2000}
						alt="about"
					/>
					<p className="relative z-10 text-center text-[20px] font-medium">
						DegenBunny is the mascot of the Degen.fund platform. He is a White Purebreed Rabbit with an
						addiction for launching new shitcoins every hour or so.
					</p>
					<br />
					<p className="relative z-10 text-center text-[20px] font-medium">
						$Bunny is the unnofficial - official community token for the degen.fund platform and unites all
						shitcoin and gamble connoisseurs
					</p>
				</div>
				<Image
					className={`w-[85vw] max-w-[420px] lg:max-w-[500px] ${aboutIntersection && aboutIntersection.isIntersecting ? 'walking' : ''}`}
					src="/degenwork.png"
					width={400}
					height={400}
					alt="degenbunny"
				/>
				<BrushedBorder className="bgGradient absolute bottom-0 h-6 w-full fill-white" />
			</section>
			<section
				id="tokenomics"
				ref={tokenomicsSectionRef}
				className="relative flex min-h-[90vh] w-full flex-col items-center overflow-hidden px-6 pt-20 sm:min-h-[100vh] md:flex-row-reverse md:justify-center"
			>
				<div className="rounded-3xl border-2 border-white bg-black/25 p-6">
					<Image
						className="relative z-10 mb-4 w-[70vw] md:max-w-[420px]"
						src="/tokenomics.webp"
						height={500}
						width={2000}
						alt="about"
					/>
					<ul className="flex flex-col gap-4 text-center">
						<li className="text-[32px] font-bold">Token Supply: 1,000,000,000</li>
						<li className="text-[20px]">No Taxes Forever, No Nonsense</li>
						<li className="text-[20px]">LP Tokens Burned & Contract Ownership Renounced</li>
						<li className="text-[20px]">
							Launched using <a href="https://www.degen.fund/">Degen.Fund 🎩</a>
						</li>
					</ul>
				</div>
				<Image
					className={`relative mt-auto w-[85vw] max-w-[420px] ${tokenomicsIntersection && tokenomicsIntersection.isIntersecting ? 'walking' : ''}`}
					src="/degengm.png"
					width={800}
					height={800}
					alt="degen apu"
				/>
				<BrushedBorder className="bgGradient absolute bottom-0 h-6 w-full fill-white" />
			</section>
			<section
				id="roadmap"
				ref={roadmapSectionRef}
				className="relative flex min-h-[90vh] w-full flex-col items-center px-6 pt-4 sm:min-h-[100vh] md:flex-row md:justify-center"
			>
				<div className="flex w-full flex-col items-center">
					<Image
						className="my-4 w-[90vw] md:max-w-[500px]"
						src="/roadmap.webp"
						height={500}
						width={2000}
						alt="about"
					/>
					<div className="rounded-3xl border-2 border-white bg-black/25 p-6">
						<ul className="flex flex-col gap-4 text-center text-[20px]">
							<li>Phase 1: fun begins, memes spread, community builds</li>
							<li>Phase 2: 1,000 holders</li>
							<li>Phase 3: takeover the meme universe</li>
						</ul>
					</div>
				</div>
				<Image
					className="mt-4 w-[85vw] max-w-[420px]"
					src="/degenbanner.jpeg"
					width={600}
					height={0}
					alt="degen apu"
				/>
				<BrushedBorder className="bgGradient absolute bottom-0 h-6 w-full fill-white" />
			</section>
			<section
				id="howtobuy"
				ref={howToBuySectionRef}
				className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden px-6 pt-4 sm:h-[100vh]"
			>
				<Image
					className="relative z-10 my-4 w-[75vw] md:max-w-[420px]"
					src="/howtobuy.webp"
					height={500}
					width={2000}
					alt="about"
				/>
				<FAQ />

				<BrushedBorder className="bgGradient absolute bottom-0 h-6 w-full fill-white" />
			</section>
			<footer className="flex w-full flex-col items-center justify-center pb-6">
				<Image className="h-40 w-auto" src="/degenbunny.png" width={400} height={0} alt="degen apu" />

				<div className="flex flex-col gap-4 text-center text-[14px]">
					<p>
						$bunny has no association with degen.fund. This is simply a community homage to the platform and
						their mascot bunny.
					</p>
					<p>© 2024 by Degens for Degens. All rights reserved!</p>
				</div>
			</footer>
		</main>
	)
}
