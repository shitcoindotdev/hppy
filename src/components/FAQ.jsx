function FAQ() {
	return (
		<div className="flex w-full flex-col gap-4 tracking-tighter lg:max-w-[800px]">
			<div className="rounded-xl bg-black/25 text-white">
				<div>
					<details className="group peer">
						<summary className="flex cursor-pointer items-center gap-2 px-4 py-2">
							<h2 className="text-left font-semibold">1. Install Phantom and Add SOL</h2>
						</summary>
					</details>
					<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[250ms] ease-in-out peer-open:grid-rows-[1fr]">
						<div className="overflow-hidden">
							<p className="group-open:border-t-1 white mx-4 -translate-y-3 border-t border-white py-3 text-left transition-all duration-[250ms] ease-in-out">
								Install the Phantom Wallet Extension or Phantom Wallet App and Create an Account at{' '}
								<a
									className="cursor-pointer text-[#ab9ff2]"
									target="_blank"
									href="https://phantom.app/"
								>
									phantom.app
								</a>
								. <br /> Make sure your account has some SOL. <br /> You can buy SOL directly on
								Phantom.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="rounded-xl bg-black/25 text-white">
				<div>
					<details className="group peer">
						<summary className="flex cursor-pointer items-center gap-2 px-4 py-2">
							<h2 className="text-left font-semibold">
								2. Buy $hoppy with <span className="text-[#ab9ff2]">Phantom</span>
							</h2>
						</summary>
					</details>
					<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[250ms] ease-in-out peer-open:grid-rows-[1fr]">
						<div className="overflow-hidden">
							<div className="group-open:border-t-1 white mx-4 flex -translate-y-3 flex-col gap-4 border-t border-white py-3 text-left transition-all duration-[250ms] ease-in-out">
								<p>
									Open Phantom and press on the icon for "Swap", then press on "Select Token" and
									paste the $hoppy Contract Address in the search bar:
								</p>
								<p className="text-[12px] text-green-500">
									49URzr9xiZSwR7mRUuYz8BKhzbxPKjXFGJEJEEuS6VDD
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="rounded-xl bg-black/25 text-white">
				<div>
					<details className="group peer">
						<summary className="flex cursor-pointer items-center gap-2 px-4 py-2">
							<h2 className="text-left font-semibold">3. Swap SOL for $hoppy</h2>
						</summary>
					</details>
					<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[250ms] ease-in-out peer-open:grid-rows-[1fr]">
						<div className="overflow-hidden">
							<div className="group-open:border-t-1 white mx-4 flex -translate-y-3 flex-col gap-4 border-t border-white py-3 text-left transition-all duration-[250ms] ease-in-out">
								<p>
									Enter any amount of SOL you want to Swap into $hoppy and confirm the the Swap in
									the&nbsp;
									<span className="text-[#ab9ff2]">Phantom</span> UI
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FAQ
