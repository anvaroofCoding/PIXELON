import AboutUs from '@/design/for.about.us'
import For_Header from '@/design/for.header'
import ScrollIndicator from '@/design/for.scroll.icon'
import Service from '@/design/for.service'

export default function Home() {
	return (
		<div className='min-h-screen'>
			<div className='w-full min-h-screen justify-center flex items-center '>
				<For_Header />
			</div>
			<div className='relative'>
				<div className='absolute -top-12 left-1/2 -translate-x-1/2 z-20'>
					<ScrollIndicator />
				</div>
				<AboutUs />
			</div>
			<div>
				<Service />
			</div>
		</div>
	)
}
