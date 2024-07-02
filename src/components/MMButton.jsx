import { twMerge } from 'tailwind-merge'

import styles from './Button.module.scss'

function MMButton({ className, isOpen, openMenu, closeMenu }) {
	return (
		<button
			onClick={isOpen ? closeMenu : openMenu}
			className={twMerge(
				'relative flex h-[28px] w-[28px] items-center justify-center transition ease-in-out',
				className,
			)}
		>
			<span className={twMerge('flex w-full flex-col items-center justify-center gap-[4px]')}>
				<span
					className={twMerge(
						'relative h-[4px] w-[30px] origin-center rounded-full bg-white',
						isOpen ? styles.menuButtonTopBunOpenAnimation : styles.menuButtonTopBunCloseAnimation,
					)}
				></span>
				<span
					className={twMerge(
						'relative h-[4px] w-[30px] origin-center rounded-full bg-white transition delay-[125ms] duration-0',
						isOpen ? 'opacity-0' : 'opacity-1',
					)}
				></span>
				<span
					className={twMerge(
						'relative h-[4px] w-[30px] origin-center rounded-full bg-white',
						isOpen ? styles.menuButtonBottomBunOpenAnimation : styles.menuButtonBottomBunCloseAnimation,
					)}
				></span>
			</span>
		</button>
	)
}

export default MMButton
