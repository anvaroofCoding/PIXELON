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
			image:
				'https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/header-image-dark.png?height=368&format=auto',
		},
		{
			id: 'item-2',
			title: 'merp.uz',
			summary:
				'Kelajak yillar uchun kerakli planlar va strategiyalarni raqamlashtirish uchun yaratilgan veb dastur',
			url: '#',
			image:
				'https://www.creative-tim.com/blog/content/images/2025/10/material-shadcn-dashboard-pages.jpg',
		},
		{
			id: 'item-3',
			title: 'Marketing',
			summary:
				'Ushbu dastur shaxsiy obyektlarda reklama bannerlari va ekranlarnining ijarachilari raqamlashtirish uchun yaratilgan',
			url: '#',
			image:
				'https://cdn.dribbble.com/userupload/16192635/file/original-e119b8ec88969eb100603efd8df9e858.jpg',
		},
		{
			id: 'item-4',
			title: 'Developer Experience',
			summary:
				'Streamline your workflow with our developer-friendly tools and documentation.',
			url: '#',
			image:
				'https://i.ytimg.com/vi/qXDfyfGwNYg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD9pxfz9fTQzB5wJGYw4xVVeMWFUw',
		},
		{
			id: 'item-5',
			title: 'Performance First',
			summary:
				'Create fast, optimized websites using our performance-focused components.',
			url: '#',
			image: 'https://i.ytimg.com/vi/aCPVw1sQ6Kc/maxresdefault.jpg',
		},

		{
			id: 'item-6',
			title: 'Performance First',
			summary:
				'Create fast, optimized websites using our performance-focused components.',
			url: '#',
			image: 'https://shadcnspace.com/images/templates/crypgo/crypgo-1.png',
		},
	],
}

function AboutUs() {
	return <Gallery6 {...demoData} />
}

export default AboutUs
