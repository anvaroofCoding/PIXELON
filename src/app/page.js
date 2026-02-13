import AboutUs from '@/design/for.about.us'
import For_Header from '@/design/for.header'
import ScrollIndicator from '@/design/for.scroll.icon'
import Service from '@/design/for.service'
import GlassAIChat from '@/IT/AI_INTEGRATION/ai'

export default function Home() {
	console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY)

	return (
		<div className='min-h-screen w-full overflow-hidden pt-10'>
			<GlassAIChat />
			<div className='w-full min-h-screen justify-center flex items-center'>
				<For_Header />
			</div>
			<div className='relative'>
				<div
					id='portfolio'
					className='absolute -top-12 left-1/2 -translate-x-1/2 z-20'
				>
					<ScrollIndicator />
				</div>
				<AboutUs />
			</div>
			<div id='xizmatlar'>
				<Service />
			</div>
		</div>
	)
}
