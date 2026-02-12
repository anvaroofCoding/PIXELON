'use client'
import { Warp } from '@paper-design/shaders-react'
import { motion } from 'framer-motion'

export default function FeaturesCards() {
	const slideRight = {
		hidden: { x: 80, opacity: 0 },
		visible: { x: 0, opacity: 1 },
	}

	const slideLeft = {
		hidden: { x: -80, opacity: 0 },
		visible: { x: 0, opacity: 1 },
	}

	const slideUp = {
		hidden: { y: 80, opacity: 0 },
		visible: { y: 0, opacity: 1 },
	}

	const features = [
		{
			title: 'Landing Sahifalar',
			varinat: slideLeft,
			description:
				"Qisqa, ta'sirli va maqsadli sahifalar, mijozlarni alohida harakatga undash uchun mo'ljallangan.",
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='50'
					height='50'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='icon icon-tabler icons-tabler-outline icon-tabler-file-analytics'
				>
					<path stroke='none' d='M0 0h24v24H0z' fill='none' />
					<path d='M14 3v4a1 1 0 0 0 1 1h4' />
					<path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2' />
					<path d='M9 17l0 -5' />
					<path d='M12 17l0 -1' />
					<path d='M15 17l0 -3' />
				</svg>
			),
		},
		{
			title: 'Korporativ veb-sayt',
			varinat: slideUp,
			description:
				"Kompaniyaning umumiy ma'lumotini taqdim etish, xizmatlar yoki mahsulotlar haqida ma'lumot berish.",
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='50'
					height='50'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='icon icon-tabler icons-tabler-outline icon-tabler-briefcase'
				>
					<path stroke='none' d='M0 0h24v24H0z' fill='none' />
					<path d='M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9' />
					<path d='M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2' />
					<path d='M12 12l0 .01' />
					<path d='M3 13a20 20 0 0 0 18 0' />
				</svg>
			),
		},
		{
			title: 'Online do’kon',
			varinat: slideRight,
			description:
				'Mahsulotlar yoki xizmatlarni onlayn tarzda sotish. To‘lov tizimlari va mahsulotni boshqarish tizimi mavjud.',
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='50'
					height='50'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart'
				>
					<path stroke='none' d='M0 0h24v24H0z' fill='none' />
					<path d='M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
					<path d='M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
					<path d='M17 17h-11v-14h-2' />
					<path d='M6 5l14 1l-1 7h-13' />
				</svg>
			),
		},
		{
			title: 'CRM tizimi',
			varinat: slideLeft,
			description:
				'Mijozlar bilan ishlashni avtomatlashtirish va boshqarish. Katta kompaniyalar yoki mijozlar bilan faol ishlaydigan tashkilotlar.',
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='50'
					height='50'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='icon icon-tabler icons-tabler-outline icon-tabler-face-id-error'
				>
					<path stroke='none' d='M0 0h24v24H0z' fill='none' />
					<path d='M4 8v-2a2 2 0 0 1 2 -2h2' />
					<path d='M4 16v2a2 2 0 0 0 2 2h2' />
					<path d='M16 4h2a2 2 0 0 1 2 2v2' />
					<path d='M16 20h2a2 2 0 0 0 2 -2v-2' />
					<path d='M9 10h.01' />
					<path d='M15 10h.01' />
					<path d='M9.5 15.05a3.5 3.5 0 0 1 5 0' />
				</svg>
			),
		},
		{
			title: 'Portfolio saytlari',
			varinat: slideUp,
			description:
				'Shaxsiy yoki kompaniya ishlarini ko‘rsatish. Freelancerlar yoki ijodkorlar uchun o‘z ishlarini targ‘ib qilishda.',
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='50'
					height='50'
					viewBox='0 0 24 24'
					fill='currentColor'
					className='icon icon-tabler icons-tabler-filled icon-tabler-polaroid'
				>
					<path stroke='none' d='M0 0h24v24H0z' fill='none' />
					<path d='M9.199 9.623l.108 .098l3.986 3.986l.094 .083a1 1 0 0 0 1.403 -1.403l-.083 -.094l-.292 -.293l1.292 -1.293l.106 -.095c.457 -.38 .918 -.38 1.386 .011l.108 .098l4.502 4.503a4.003 4.003 0 0 1 -3.596 2.77l-.213 .006h-12a4.002 4.002 0 0 1 -3.809 -2.775l5.516 -5.518l.106 -.095c.457 -.38 .918 -.38 1.386 .011zm8.801 -7.623a4 4 0 0 1 3.995 3.8l.005 .2v6.585l-3.293 -3.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-1.307 1.306l-2.293 -2.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-4.307 4.306v-6.585a4 4 0 0 1 3.8 -3.995l.2 -.005h12zm-2.99 3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z' />
					<path d='M8.01 20a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993l.127 -.007z' />
					<path d='M12.01 20a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993l.127 -.007z' />
					<path d='M16.01 20a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993l.127 -.007z' />
				</svg>
			),
		},

		// new
		{
			title: 'Blog sahifalari',
			varinat: slideRight,
			description:
				"ERP platformasi korxona yoki tashkilotning barcha jarayonlarini birlashtiruvchi kompleks dasturiy ta'minotdir.",
			icon: (
				<svg
					className='w-12 h-12 text-white'
					fill='currentColor'
					viewBox='0 0 24 24'
				>
					<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
				</svg>
			),
		},
		//new
		{
			title: 'ERP platformasi',
			varinat: slideLeft,
			description:
				"ERP platformasi korxona yoki tashkilotning barcha jarayonlarini birlashtiruvchi kompleks dasturiy ta'minotdir. ",
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='50'
					height='50'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='icon icon-tabler icons-tabler-outline icon-tabler-lock-cog'
				>
					<path stroke='none' d='M0 0h24v24H0z' fill='none' />
					<path d='M12 21h-5a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10c.564 0 1.074 .234 1.437 .61' />
					<path d='M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0' />
					<path d='M8 11v-4a4 4 0 1 1 8 0v4' />
					<path d='M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
					<path d='M19.001 15.5v1.5' />
					<path d='M19.001 21v1.5' />
					<path d='M22.032 17.25l-1.299 .75' />
					<path d='M17.27 20l-1.3 .75' />
					<path d='M15.97 17.25l1.3 .75' />
					<path d='M20.733 20l1.3 .75' />
				</svg>
			),
		},
		{
			title: 'Ta’lim platformasi',
			varinat: slideUp,
			description:
				"Ta'lim kurslari, videodarsliklar, yoki online testlar uchun. O‘quv muassasalari yoki onlayn dars beruvchi kompaniyalar uchun.",
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='50'
					height='50'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='icon icon-tabler icons-tabler-outline icon-tabler-school'
				>
					<path stroke='none' d='M0 0h24v24H0z' fill='none' />
					<path d='M22 9l-10 -4l-10 4l10 4l10 -4v6' />
					<path d='M6 10.6v5.4a6 3 0 0 0 12 0v-5.4' />
				</svg>
			),
		},
		{
			title: 'Alohida loyiha ham',
			varinat: slideRight,
			description:
				"Agar siz yangi startup loyiha boshlamoqchi bo'lsangiz biz uni boshlashdan dasturiy ta'minotini yaratishgacha yordam beramiz.",
			icon: (
				<svg
					className='w-12 h-12 text-white'
					fill='currentColor'
					viewBox='0 0 24 24'
				>
					<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
				</svg>
			),
		},
	]
	const getShaderConfig = index => {
		const configs = [
			{
				proportion: 0.3,
				softness: 0.8,
				distortion: 0.15,
				swirl: 0.6,
				swirlIterations: 8,
				shape: 'checks',
				shapeScale: 0.08,
				colors: [
					'hsl(280, 100%, 30%)',
					'hsl(320, 100%, 60%)',
					'hsl(340, 90%, 40%)',
					'hsl(300, 100%, 70%)',
				],
			},
			{
				proportion: 0.4,
				softness: 1.2,
				distortion: 0.2,
				swirl: 0.9,
				swirlIterations: 12,
				shape: 'dots',
				shapeScale: 0.12,
				colors: [
					'hsl(200, 100%, 25%)',
					'hsl(180, 100%, 65%)',
					'hsl(160, 90%, 35%)',
					'hsl(190, 100%, 75%)',
				],
			},
			{
				proportion: 0.35,
				softness: 0.9,
				distortion: 0.18,
				swirl: 0.7,
				swirlIterations: 10,
				shape: 'checks',
				shapeScale: 0.1,
				colors: [
					'hsl(120, 100%, 25%)',
					'hsl(140, 100%, 60%)',
					'hsl(100, 90%, 30%)',
					'hsl(130, 100%, 70%)',
				],
			},
			{
				proportion: 0.45,
				softness: 1.1,
				distortion: 0.22,
				swirl: 0.8,
				swirlIterations: 15,
				shape: 'dots',
				shapeScale: 0.09,
				colors: [
					'hsl(30, 100%, 35%)',
					'hsl(50, 100%, 65%)',
					'hsl(40, 90%, 40%)',
					'hsl(45, 100%, 75%)',
				],
			},
			{
				proportion: 0.38,
				softness: 0.95,
				distortion: 0.16,
				swirl: 0.85,
				swirlIterations: 11,
				shape: 'checks',
				shapeScale: 0.11,
				colors: [
					'hsl(250, 100%, 30%)',
					'hsl(270, 100%, 65%)',
					'hsl(260, 90%, 35%)',
					'hsl(265, 100%, 70%)',
				],
			},
			{
				proportion: 0.42,
				softness: 1.0,
				distortion: 0.19,
				swirl: 0.75,
				swirlIterations: 9,
				shape: 'dots',
				shapeScale: 0.13,
				colors: [
					'hsl(330, 100%, 30%)',
					'hsl(350, 100%, 60%)',
					'hsl(340, 90%, 35%)',
					'hsl(345, 100%, 75%)',
				],
			},
			// new
			{
				proportion: 0.55,
				softness: 1.3,
				distortion: 0.12,
				swirl: 0.55,
				swirlIterations: 6,
				shape: 'blobs',
				shapeScale: 0.18,
				colors: [
					'hsl(210, 100%, 60%)',
					'hsl(190, 90%, 45%)',
					'hsl(230, 80%, 65%)',
					'hsl(260, 70%, 70%)',
				],
			},
			{
				proportion: 0.38,
				softness: 0.9,
				distortion: 0.28,
				swirl: 1.1,
				swirlIterations: 12,
				shape: 'waves',
				shapeScale: 0.11,
				colors: [
					'hsl(280, 100%, 65%)',
					'hsl(190, 100%, 55%)',
					'hsl(320, 100%, 60%)',
					'hsl(220, 90%, 50%)',
				],
			},
			{
				proportion: 0.62,
				softness: 1.8,
				distortion: 0.08,
				swirl: 0.35,
				swirlIterations: 4,
				shape: 'clouds',
				shapeScale: 0.22,
				colors: [
					'hsl(220, 40%, 85%)',
					'hsl(260, 60%, 80%)',
					'hsl(200, 50%, 75%)',
					'hsl(280, 50%, 82%)',
				],
			},
		]
		return configs[index % configs.length]
	}

	return (
		<section className='min-h-screen py-15 md:py-25 px-4'>
			<div className='container'>
				<div className='text-center mb-16'>
					<h2
						data-aos='fade-up-right'
						className='lg:mb-6 mb-2 text-3xl md:text-4xl font-semibold  text-gray-900 dark:text-white'
					>
						Xizmat turlari
					</h2>
					<p
						data-aos='fade-up-left'
						className='md:text-xl text-md text-gray-600  dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'
					>
						Dasturlash sohasida eng talabgir xizmat turlarini taqdim etamiz.
						Bizning tajribali jamoamiz sizning biznesingiz uchun eng yaxshi
						yechimlarni yaratishga tayyor
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{features.map((feature, index) => {
						const shaderConfig = getShaderConfig(index)
						return (
							<motion.div
								key={index}
								className='relative h-80 will-change-transform'
								variants={feature.varinat}
								initial='hidden'
								whileInView='visible'
								viewport={{ once: true, margin: '-80px' }}
								transition={{ type: 'tween', duration: 0.5 }}
							>
								<div className='absolute inset-0 rounded-3xl overflow-hidden'>
									<Warp
										style={{ height: '100%', width: '100%' }}
										proportion={shaderConfig.proportion}
										softness={shaderConfig.softness}
										distortion={shaderConfig.distortion}
										swirl={shaderConfig.swirl}
										swirlIterations={shaderConfig.swirlIterations}
										shape={shaderConfig.shape}
										shapeScale={shaderConfig.shapeScale}
										scale={1}
										rotation={0}
										speed={0.8}
										colors={shaderConfig.colors}
									/>
								</div>
								<div className='relative z-10 p-8 rounded-3xl h-full flex flex-col bg-black/50 border border-white/20 dark:border-white/10'>
									<div className='mb-6 filter drop-shadow-lg text-white'>
										{feature.icon}
									</div>

									<h3 className='text-2xl font-bold mb-4 text-white'>
										{feature.title}
									</h3>

									<p className='leading-relaxed flex-grow text-gray-100 font-medium'>
										{feature.description}
									</p>

									<div className='mt-6 flex items-center text-sm font-bold text-gray-200'>
										<span className='mr-2 cursor-pointer'>Ko'proq o'qish</span>
										<svg
											className='w-4 h-4'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M9 5l7 7-7 7'
											/>
										</svg>
									</div>
								</div>
							</motion.div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
