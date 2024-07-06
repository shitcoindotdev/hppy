import BrushedBorder from '@/components/BrushedBorder'
import FAQ from '@/components/FAQ'
import Links from '@/components/Links'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { useIntersection } from 'react-use'

import { useRef } from 'react'

export default function Home() {
  const aboutSectionRef = useRef(null);
  const tokenomicsSectionRef = useRef(null);
  const roadmapSectionRef = useRef(null);
  const howToBuySectionRef = useRef(null);


  const aboutIntersection = useIntersection(aboutSectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  });

  const tokenomicsIntersection = useIntersection(tokenomicsSectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  });

  const roadmapIntersection = useIntersection(roadmapSectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  });

  const howToBuyIntersection = useIntersection(howToBuySectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  });

	return (
		<main className={`relative flex flex-col overflow-hidden text-white`} style={{ fontFamily: 'Quicksand' }}>
			<Navbar />
			<section
				id="home"
				className="relative flex h-[90vh] w-full flex-col md:flex-row items-center overflow-hidden sm:h-[100vh]"
			>
        <div className='hidden md:block md:w-[50vw]'></div>
				<div className='flex flex-col items-center px-6 pt-20'>
        <h1 className="sr-only">$Hoppy</h1>
				<Image
					className="w-[55vw] max-w-[690px] md:w-[222px]"
					src="/hoppyCashtag.webp"
					width={2560}
					height={1280}
					alt="Hoppy Cashtag"
				/>
				<h2 className="relative lg:max-w-[550px] z-10 text-center text-[20px] lg:text-[28px] font-medium">
					is on a mission to take over the meme universe. The time has come for Hoppy to show his greatness.
				</h2>
				
				<Links className="relative z-10 mb-8 mt-8 sm:mb-2" />
			
				<h3 className='relative z-10 underline text-center'>
					The first one always wins, buy the first $hoppy on Solana
				</h3>
				<p className="relative z-10 mb-8 hidden sm:block">CA: 49URzr9xiZSwR7mRUuYz8BKhzbxPKjXFGJEJEEuS6VDD</p>
				<a
					className="relative z-10 hover:bg-white/25 transition duration-300 ease-in-out rounded-full border-2 border-white bg-black/20 px-8 py-3 text-[18px] font-bold backdrop-blur-sm"
					href="https://dexscreener.com/solana/ffaoneyajfqzvb2a9mef3dx5bwvu1cxshj4fi1cg9arq"
          target='_blank'
				>
					Buy $hoppy
				</a>
        </div>
				<Image
					className="walking absolute bottom-0 z-0 w-[85vw] max-w-[420px] lg:max-w-[666px]"
					src="/hoppyDefault.svg"
					width={0}
					height={0}
					alt="Hoppy apu"
				/>
				<BrushedBorder className="absolute bottom-0 h-6 w-full bg-[#838a3a] fill-white" />
			</section>
			<section
				id="about"
        ref={aboutSectionRef}
				className="relative flex min-h-[90vh] w-full flex-col md:justify-center md:flex-row items-center overflow-hidden px-6 pt-20 sm:min-h-[100vh]"
			>
				<h1 className="sr-only">About</h1>
				<div className='flex flex-col items-center md:max-w-[550px]'>
        <Image
					className="relative z-10 mb-4 w-[70vw] md:w-[330px]"
					src="/about.webp"
					height={500}
					width={2000}
					alt="about"
				/>
				<p className="relative z-10 text-center text-[20px] font-medium">
					Hoppy is an anthropomorphic frog character based on the famous comic book «The Night Riders»,
					published in 2012 by artist and illustrator Matt Furie. Today, this is one of the few characters of
					Matt Furie that can truly be considered unique.
				</p>
				<br />
				<p className="relative z-10 text-center text-[20px] font-medium">
					Hoppy began his memetic revolution through countless iterations of memes cementing his iconic
					status, mastering every form with his unparalleled power. With its roots in internet culture, Hoppy
					infuses humour and meme magic into the world, fostering a movement that unites and makes everyone
					happy.
				</p>
        </div>
				<Image
					className={`w-[85vw] max-w-[420px] lg:max-w-[500px] ${aboutIntersection && aboutIntersection.isIntersecting ? 'walking-right' : ''}`}
					src="/hoppyMage.svg"
					width={0}
					height={0}
					alt="Hoppy apu"
				/>
				<BrushedBorder className="absolute bottom-0 h-6 w-full bg-[#838a3a] fill-white" />
			</section>
			<section
				id="tokenomics"
        ref={tokenomicsSectionRef}
				className="relative flex min-h-[90vh] w-full flex-col md:flex-row-reverse md:justify-center items-center overflow-hidden px-6 pt-20 sm:min-h-[100vh]"
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
						<li className="text-[32px] font-bold">Token Supply: 69,000, 000</li>
						<li className="text-[20px]">No Taxes Forever, No Nonsense</li>
						<li className="text-[20px]">LP Tokens Burned & Contract Ownership Renounced</li>
					</ul>
				</div>
				<Image
					className={`relative mt-auto w-[85vw] max-w-[420px] ${tokenomicsIntersection && tokenomicsIntersection.isIntersecting ? 'walking': ''}`}
					src="/hoppygent.png"
					width={800}
					height={800}
					alt="Hoppy apu"
				/>
				<BrushedBorder className="absolute bottom-0 h-6 w-full bg-[#838a3a] fill-white" />
			</section>
			<section
				id="roadmap"
        ref={roadmapSectionRef}
				className="relative flex min-h-[90vh] w-full flex-col md:flex-row md:justify-center items-center px-6 pt-4 sm:min-h-[100vh]"
			>
				<Image
					className="w-[85vw] max-w-[420px]"
					src="/peepoo.svg"
					width={0}
					height={0}
					alt="Hoppy apu"
				/>
				<div className='flex flex-col w-full items-center'>
        <Image
					className="my-4 w-[90vw] md:max-w-[500px]"
					src="/roadmap.webp"
					height={500}
					width={2000}
					alt="about"
				/>
				<div className="rounded-3xl border-2 border-white bg-black/25 p-6">
					<ul className="flex flex-col gap-4 text-center text-[20px]">
						<li>Phase 1: fun bgins, memes spread, community builds</li>
						<li>Phase 2: 100,000 holders</li>
						<li>Phase 3: takeover the meme universe</li>
					</ul>
				</div>
        </div>
				<Image
					className="mt-4 w-[85vw] max-w-[420px]"
					src="/hoppypee.svg"
					width={0}
					height={0}
					alt="Hoppy apu"
				/>
				<BrushedBorder className="absolute bottom-0 h-6 w-full bg-[#838a3a] fill-white" />
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
				<Image
					className={`w-[85vw] max-w-[420px] ${howToBuyIntersection && howToBuyIntersection.isIntersecting ? 'walking-right' : ''}`}
					src="/Bull.svg"
					width={0}
					height={0}
					alt="Hoppy bull"
				/>
				<BrushedBorder className="absolute bottom-0 h-6 w-full bg-[#838a3a] fill-white" />
			</section>
			<footer className="flex w-full flex-col items-center justify-center pb-6">
				<Image
					className="h-40 w-auto"
					src="/hoppyDefault.svg"
					width={0}
					height={0}
					alt="Hoppy apu"
				/>
				<Image
					className="h-20 w-auto"
					src="/hoppyCashtag.webp"
					width={2560}
					height={1280}
					alt="Hoppy Cashtag"
				/>
				<div className="flex flex-col gap-4 text-center text-[14px]">
					<p>
						$HOPPY coin has no association with Matt Furie or his creation “The Night Riders”. This token is
						simply paying homage to a beloved meme we all love and recognize.
					</p>
					<p>© 2024 by Hoppy. All rights reserved!</p>
				</div>
			</footer>
		</main>
	)
}
