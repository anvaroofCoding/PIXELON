import { Gallery6 } from '@/components/blocks/gallery6'

const demoData = {
	heading: 'Bizning qilgan ishlarimiz',
	demoUrl: 'https://www.shadcnblocks.com',
	items: [
		{
			id: 'item-1',
			title: 'uzmetro.uz',
			summary: 'Next.js va Python yordamida yaratilgan veb sayt',
			url: '#',
			image: '/porfolio/metro.png',
		},
		{
			id: 'item-2',
			title: 'merp.uz',
			summary:
				'Kelajak yillar uchun kerakli planlar va strategiyalarni raqamlashtirish uchun yaratilgan veb dastur',
			url: '#',
			image: '/porfolio/erp.jpg',
		},
		{
			id: 'item-3',
			title: 'Marketing',
			summary:
				'Ushbu dastur shaxsiy obyektlarda reklama bannerlari va ekranlarnining ijarachilari raqamlashtirish uchun yaratilgan',
			url: '#',
			image: '/porfolio/marketing.jpg',
		},
		{
			id: 'item-4',
			title: 'Developer Experience',
			summary:
				'Streamline your workflow with our developer-friendly tools and documentation.',
			url: '#',
			image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
		},
		{
			id: 'item-5',
			title: 'Performance First',
			summary:
				'Create fast, optimized websites using our performance-focused components.',
			url: '#',
			image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
		},
	],
}

function AboutUs() {
	return <Gallery6 {...demoData} />
}

export default AboutUs
