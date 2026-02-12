'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Counter from './Counter'

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.2 },
	},
}

const item = {
	hidden: { opacity: 0, y: 30 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const image = {
	hidden: { opacity: 0, scale: 0.85 },
	show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
}

const float = {
	animate: {
		y: [0, -10, 0],
		transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
	},
}

export default function HeroSection({
	title,
	subtitle,
	actions,
	stats,
	images,
	className,
}) {
	return (
		<section className={cn('bg-background py-24 overflow-hidden', className)}>
			<div className='container grid lg:grid-cols-2 gap-12'>
				{/* TEXT */}
				<motion.div
					variants={container}
					initial='hidden'
					animate='show'
					className='text-center lg:text-left space-y-6 flex flex-col items-center lg:items-start justify-center'
				>
					<div>
						{/* <motion.h1
							variants={item}
							className='text-5xl md:text-6xl font-bold'
						>
							Xush kelibsiz!
						</motion.h1> */}
						<motion.h1
							variants={item}
							className='text-5xl md:text-6xl font-bold'
						>
							{/* cyan-600 */}
							Raqamli kelajagingizni <br />{' '}
							<span className='text-cyan-600'>Pixelon</span> bilan birga
							yarating
						</motion.h1>
					</div>

					<motion.p variants={item} className='text-muted-foreground text-lg'>
						{subtitle}
					</motion.p>

					<motion.div
						variants={item}
						className='flex gap-4 justify-center lg:justify-start'
					>
						<a href='#about'>
							<Button
								className={`bg-cyan-600 text-white  hover:bg-cyan-600/90`}
								size='lg'
							>
								Biz haqimizda{' '}
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='18'
									height='18'
									viewBox='0 0 24 24'
									fill='currentColor'
									className='icon icon-tabler icons-tabler-filled icon-tabler-caret-right'
								>
									<path stroke='none' d='M0 0h24v24H0z' fill='none' />
									<path d='M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z' />
								</svg>
							</Button>
						</a>

						<a href='#xizmatlar'>
							<Button
								className={'border-cyan-500 hover:bg-cyan-400/10'}
								size='lg'
								variant={'outline'}
							>
								Xizmatlar
							</Button>
						</a>
					</motion.div>

					<motion.div
						variants={item}
						className='flex gap-4 justify-center lg:justify-start pt-6 overflow-x-auto scrollbar-hide'
					>
						{stats.map((s, i) => (
							<div key={i} className='flex gap-2 items-center '>
								<div className='h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-muted flex items-center justify-center'>
									{s.icon}
								</div>
								<div>
									<p className='font-bold text-lg sm:text-xl'>
										<Counter targetValue={s.value} />
									</p>
									<p className='text-muted-foreground text-xs sm:text-sm'>
										{s.label}
									</p>
								</div>
							</div>
						))}
					</motion.div>
				</motion.div>

				{/* IMAGES */}
				<motion.div
					variants={container}
					initial='hidden'
					animate='show'
					className='relative h-[500px]'
				>
					<motion.div
						className='absolute top-6 left-1/3 h-14 w-14 rounded-full bg-blue-500/20'
						variants={float}
						animate='animate'
					/>
					<motion.div
						className='absolute bottom-8 right-1/4 h-10 w-10 rounded-lg bg-blue-500/20'
						variants={float}
						animate='animate'
					/>

					{images.map((src, i) => (
						<motion.div
							key={i}
							variants={image}
							className={`absolute rounded-2xl bg-muted p-2 shadow-xl
                ${i === 0 && 'top-0 left-1/2 -translate-x-1/2 w-64 h-64'}
                ${i === 1 && 'right-0 top-1/3 w-56 h-56'}
                ${i === 2 && 'bottom-0 left-0 w-48 h-48'}
              `}
						>
							<img
								src={src}
								className='w-full h-full object-cover rounded-xl'
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
