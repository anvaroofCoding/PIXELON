'use client'
import HeroSection from '@/components/ui/hero-section-9' // Adjust the import path as needed
import { Briefcase, ChartNoAxesCombined, Link as LinkIcon } from 'lucide-react'

const For_Header = () => {
	// Sample data to be passed as props
	const heroData = {
		title: (
			<>
				Raqamli kelajagingizni <br /> Pixelon bilan birga yarating
			</>
		),
		subtitle:
			'Yuqori sifatdagi aniqlikka asoslanib istalgan turdagi dasturlarni tayyorlaymiz',
		actions: [
			{
				text: 'Biz haqimizda',
				href: '/join-class', // oldingi onClick o‘rniga link
				variant: 'default',
				background: 'cyan-600',
			},
			{
				text: 'Xizmatlarimiz',
				href: '/learn-more',
				variant: 'outline',
			},
		],
		stats: [
			{
				value: '3 yil',
				label: 'Tajriba',
				icon: <ChartNoAxesCombined className='h-5 w-5 text-muted-foreground' />,
			},
			{
				value: '20+',
				label: 'Portfolio',
				icon: <Briefcase className='h-5 w-5 text-muted-foreground' />,
			},
			{
				value: '10+',
				label: 'Xizmar turlari',
				icon: <LinkIcon className='h-5 w-5 text-muted-foreground' />,
			},
		],
		images: ['/h1.jpg', '/h2.jpg', '/h3.jpg'],
	}

	return (
		<div id='header' className='w-full bg-background '>
			<HeroSection
				title={heroData.title}
				subtitle={heroData.subtitle}
				actions={heroData.actions}
				stats={heroData.stats}
				images={heroData.images}
			/>
		</div>
	)
}

export default For_Header
