'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'

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
			<div className='container mx-auto grid lg:grid-cols-2 gap-12 items-center'>
				{/* TEXT */}
				<motion.div
					variants={container}
					initial='hidden'
					animate='show'
					className='text-center lg:text-left space-y-6'
				>
					<motion.h1 variants={item} className='text-5xl font-bold'>
						{title}
					</motion.h1>

					<motion.p variants={item} className='text-muted-foreground text-lg'>
						{subtitle}
					</motion.p>

					<motion.div
						variants={item}
						className='flex gap-4 justify-center lg:justify-start'
					>
						{actions.map((a, i) => (
							<Button key={i} size='lg' asChild variant={a.variant}>
								<Link href={a.href}>{a.text}</Link>
							</Button>
						))}
					</motion.div>

					<motion.div
						variants={item}
						className='flex gap-4 justify-center lg:justify-start pt-6 overflow-x-auto scrollbar-hide'
					>
						{stats.map((s, i) => (
							<div
								key={i}
								className='flex gap-2 items-center min-w-[120px] sm:min-w-[150px]'
							>
								<div className='h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-muted flex items-center justify-center'>
									{s.icon}
								</div>
								<div>
									<p className='font-bold text-lg sm:text-xl'>{s.value}</p>
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
