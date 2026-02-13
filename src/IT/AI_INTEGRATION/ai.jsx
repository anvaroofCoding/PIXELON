'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { AnimatePresence, motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const Icon = ({ onClick }) => (
	<div
		onClick={onClick}
		className='relative bg-black border-2 border-cyan-600/70 rounded-2xl flex items-center justify-center w-10 h-10 overflow-hidden shadow-[0_0_15px_5px_#06b6d4]
'
	>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='icon icon-tabler icons-tabler-outline icon-tabler-ai text-white'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M8 16v-6a2 2 0 1 1 4 0v6' />
			<path d='M8 13h4' />
			<path d='M16 8v8' />
		</svg>
		<motion.div
			className='absolute top-0 left-0 size-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30'
			initial={{ x: '-100%' }}
			animate={{ x: '100%' }}
			transition={{
				duration: 2,
				ease: 'linear',
				repeat: Infinity,
				repeatType: 'loop',
			}}
			style={{ willChange: 'transform' }}
		/>
	</div>
)

export default function GlassAIChat() {
	const [messages, setMessages] = useState([])
	const [input, setInput] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const messagesEndRef = useRef(null)

	const Icon = ({ onClick }) => (
		<div
			onClick={onClick}
			className='relative bg-black border-2 border-cyan-600/70 rounded-2xl flex items-center justify-center w-10 h-10 overflow-hidden shadow-[0_0_15px_5px_#06b6d4]
'
		>
			{isOpen ? (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-x'
				>
					<path stroke='none' d='M0 0h24v24H0z' fill='none' />
					<path d='M10 10l4 4m0 -4l-4 4' />
					<path d='M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9' />
				</svg>
			) : (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='icon icon-tabler icons-tabler-outline icon-tabler-ai text-white'
				>
					<path stroke='none' d='M0 0h24v24H0z' fill='none' />
					<path d='M8 16v-6a2 2 0 1 1 4 0v6' />
					<path d='M8 13h4' />
					<path d='M16 8v8' />
				</svg>
			)}
			<motion.div
				className='absolute top-0 left-0 size-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30'
				initial={{ x: '-100%' }}
				animate={{ x: '100%' }}
				transition={{
					duration: 2,
					ease: 'linear',
					repeat: Infinity,
					repeatType: 'loop',
				}}
				style={{ willChange: 'transform' }}
			/>
		</div>
	)

	const scrollToBottom = () =>
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	useEffect(() => scrollToBottom(), [messages])

	const sendMessage = async text => {
		const messageText = text || input
		if (!messageText.trim()) return

		setMessages(prev => [
			...prev,
			{ id: Date.now(), text: messageText, sender: 'user' },
		])
		setInput('')
		setIsLoading(true)

		try {
			const res = await fetch('/api/chat', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ message: input }),
			})
			const data = await res.json()
			setMessages(prev => [
				...prev,
				{
					id: Date.now() + 'ai',
					text: data.reply || 'Xato yuz berdi',
					sender: 'ai',
				},
			])
		} catch {
			setMessages(prev => [
				...prev,
				{
					id: Date.now() + 'err',
					text: 'Serverga ulanib bo‘lmadi',
					sender: 'ai',
				},
			])
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		if (isOpen && messages.length === 0) sendMessage('Salom!')
	}, [isOpen])

	return (
		<>
			<div className='fixed bottom-6 right-6 z-50'>
				<Icon onClick={() => setIsOpen(o => !o)} />
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: 30, scale: 0.9 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 30, scale: 0.9 }}
						transition={{ type: 'spring', stiffness: 300, damping: 25 }}
						className='fixed bottom-24 right-6 z-50'
					>
						<Card className='w-70 md:w-96 md:h-[540px] h-[400px] backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl overflow-hidden'>
							<CardContent className='p-0 flex flex-col h-full'>
								{/* HEADER */}
								<div className='px-5 py-4 border-b border-white/20 text-white font-semibold bg-white/10 flex items-center gap-1'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
										className='icon icon-tabler icons-tabler-outline icon-tabler-robot dark:text-white text-black'
									>
										<path stroke='none' d='M0 0h24v24H0z' fill='none' />
										<path d='M6 6a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -4' />
										<path d='M12 2v2' />
										<path d='M9 12v9' />
										<path d='M15 12v9' />
										<path d='M5 16l4 -2' />
										<path d='M15 14l4 2' />
										<path d='M9 18h6' />
										<path d='M10 8v.01' />
										<path d='M14 8v.01' />
									</svg>{' '}
									<span className='dark:text-white text-black'>Mister AI</span>
								</div>

								{/* MESSAGES */}
								<div className='flex-1 overflow-y-auto px-4 py-3 space-y-3'>
									{messages.map(m => (
										<div
											key={m.id}
											className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
										>
											<div
												className={`px-4 py-2 max-w-[75%] text-sm rounded-2xl backdrop-blur-md ${m.sender === 'user' ? 'bg-blue-500/70 dark:text-white text-black rounded-br-sm' : 'bg-white/20 dark:text-white text-black rounded-bl-sm'}`}
											>
												{m.text}
											</div>
										</div>
									))}
									{isLoading && (
										<div className='dark:text-white/60 text-black text-sm'>
											AI yozmoqda...
										</div>
									)}
									<div ref={messagesEndRef} />
								</div>

								{/* INPUT */}
								<div className='p-3 border-t border-white/20 flex gap-2 bg-white/10'>
									<Input
										value={input}
										onChange={e => setInput(e.target.value)}
										onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
										placeholder='Xabar yozing...'
										disabled={isLoading}
										className='bg-white/20 dark:text-white text-black placeholder:text-white/50 border-white/20'
									/>
									<Button
										onClick={() => sendMessage(input)}
										disabled={!input.trim() || isLoading}
										size='icon'
										className='bg-cyan-600 hover:bg-cyan-500 rounded-full pt-0.5'
									>
										<Send className='w-4 h-4 text-white' />
									</Button>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}
