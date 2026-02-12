'use client'
import { motion } from 'framer-motion'

export default function ScrollIndicator() {
	return (
		<div className='flex flex-col items-center justify-center'>
			<motion.div
				animate={{ y: [0, 10, 0] }}
				transition={{
					duration: 1.4,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
				className='w-5 h-8 rounded-full border-2 dark:border-white/70 border-black flex justify-center pt-2'
			>
				<motion.span
					animate={{ opacity: [1, 0, 1] }}
					transition={{
						duration: 1.4,
						repeat: Infinity,
					}}
					className='w-1 h-2 dark:bg-white/80 bg-black rounded-full'
				/>
			</motion.div>

			<p
				data-aos='fade-up'
				className='mt-4 text-xs dark:text-white/70 text-black/80 text-center select-none'
			>
				Pastga scroll qiling
			</p>
		</div>
	)
}
