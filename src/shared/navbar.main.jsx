'use client'

import { Button } from '@/components/ui/button'
import {
	Facebook,
	Github,
	Globe,
	Linkedin,
	Menu,
	Moon,
	Sun,
	Twitter,
	X,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { useCallback, useEffect, useState } from 'react'

const languages = [
	{ code: 'en', name: 'English', flag: '🇺🇸' },
	{ code: 'es', name: 'Español', flag: '🇪🇸' },
	{ code: 'fr', name: 'Français', flag: '🇫🇷' },
	{ code: 'de', name: 'Deutsch', flag: '🇩🇪' },
	{ code: 'jp', name: '日本語', flag: '🇯🇵' },
	{ code: 'cn', name: '中文', flag: '🇨🇳' },
]

const socialIcons = [
	{ id: 'fb', icon: Facebook, label: 'Facebook', link: '#' },
	{ id: 'tw', icon: Twitter, label: 'Twitter', link: '#' },
	{ id: 'in', icon: Linkedin, label: 'LinkedIn', link: '#' },
	{ id: 'gh', icon: Github, label: 'GitHub', link: '#' },
]

const navItems = ['Bosh sahifa', 'Portfolio', 'Xizmatlar', 'Aloqa']

export default function NavbarMain() {
	const { theme, setTheme } = useTheme()

	const [mounted, setMounted] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)
	const [currentLang, setCurrentLang] = useState('en')
	const [showLangMenu, setShowLangMenu] = useState(false)

	const isDark = theme === 'dark'

	useEffect(() => setMounted(true), [])

	const handleScroll = useCallback(() => {
		setIsScrolled(window.scrollY > 20)
	}, [])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [handleScroll])

	if (!mounted) return null

	return (
		<div className={isDark ? 'dark' : ''}>
			<nav
				className={`fixed w-full z-50 transition-all duration-300 ${
					isScrolled
						? 'bg-background/90 backdrop-blur-md shadow-lg border-b border-border'
						: 'bg-transparent'
				}`}
			>
				<div className='container'>
					<div className='flex justify-between items-center h-20'>
						{/* LOGO */}
						<div className='flex items-center gap-2 cursor-pointer group'>
							<div className='text-4xl font-black bg-gradient-to-br from-cyan-500 to-blue-600 bg-clip-text text-transparent transition-all group-hover:from-cyan-400 group-hover:to-blue-500'>
								P
							</div>
							<div className='flex flex-col'>
								<span className='text-sm font-bold tracking-widest transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400'>
									TECH
								</span>
								<span className='text-xs text-muted-foreground font-mono transition-colors group-hover:text-cyan-500 dark:group-hover:text-cyan-400'>
									Pixelon
								</span>
							</div>
						</div>

						{/* DESKTOP MENU */}
						<div className='hidden md:flex gap-8'>
							{navItems.map(item => (
								<a key={item} href='#' className='relative font-medium group'>
									<span className='transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400'>
										{item}
									</span>
									<span className='absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all group-hover:w-full'></span>
								</a>
							))}
						</div>

						{/* RIGHT SIDE */}
						<div className='flex items-center gap-3'>
							{/* SOCIAL */}
							<div className='hidden lg:flex gap-2 pl-4 border-l border-border'>
								{socialIcons.map(({ id, icon: Icon, label, link }) => (
									<a
										key={id}
										href={link}
										title={label}
										className='w-10 h-10 flex items-center justify-center rounded-lg bg-secondary hover:bg-cyan-600 dark:hover:bg-cyan-500 transition-all hover:text-white hover:scale-110'
									>
										<Icon size={16} />
									</a>
								))}
							</div>

							{/* LANGUAGE */}
							<div className='relative'>
								<Button
									size='icon'
									variant='ghost'
									onClick={() => setShowLangMenu(v => !v)}
								>
									<Globe className='w-5 h-5' />
								</Button>

								{showLangMenu && (
									<div className='absolute right-0 mt-2 w-48 bg-card border rounded-lg shadow-xl p-2 z-50'>
										{languages.map(lang => (
											<button
												key={lang.code}
												onClick={() => {
													setCurrentLang(lang.code)
													setShowLangMenu(false)
												}}
												className={`w-full flex items-center gap-3 px-4 py-2 rounded-md text-sm transition ${
													currentLang === lang.code
														? 'bg-cyan-600 text-white'
														: 'hover:bg-secondary'
												}`}
											>
												<span className='text-xl'>{lang.flag}</span>
												{lang.name}
											</button>
										))}
									</div>
								)}
							</div>

							{/* THEME */}
							<Button
								size='icon'
								variant='ghost'
								onClick={() => setTheme(isDark ? 'light' : 'dark')}
							>
								{isDark ? (
									<Sun className='w-5 h-5' />
								) : (
									<Moon className='w-5 h-5' />
								)}
							</Button>

							{/* MOBILE BTN */}
							<Button
								size='icon'
								variant='ghost'
								className='md:hidden'
								onClick={() => setIsOpen(v => !v)}
							>
								{isOpen ? (
									<X className='w-6 h-6' />
								) : (
									<Menu className='w-6 h-6' />
								)}
							</Button>
						</div>
					</div>
				</div>

				{/* MOBILE MENU */}
				<div
					className={`md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 ${
						isOpen
							? 'opacity-100 pointer-events-auto'
							: 'opacity-0 pointer-events-none'
					}`}
					onClick={() => setIsOpen(false)}
				>
					<div
						className={`fixed right-0 top-0 h-screen w-full sm:w-80 bg-card border-l shadow-2xl p-6 transition-transform duration-300 z-50 ${
							isOpen ? 'translate-x-0' : 'translate-x-full'
						}`}
						onClick={e => e.stopPropagation()}
					>
						{/* MOBILE BTN */}
						<Button
							size='icon'
							variant='ghost'
							className='md:hidden'
							onClick={() => setIsOpen(v => !v)}
						>
							{isOpen ? (
								<X className='w-6 h-6' />
							) : (
								<Menu className='w-6 h-6' />
							)}
						</Button>

						{/* NAV ITEMS */}
						<div className='flex flex-col gap-4'>
							{navItems.map(item => (
								<a
									key={item}
									href='#'
									className='block text-lg font-semibold p-3 rounded-lg hover:bg-secondary transition-colors'
								>
									{item}
								</a>
							))}
						</div>

						<div className='border-t border-border my-4'></div>

						{/* SOCIAL ICONS */}
						<div className='flex gap-3'>
							{socialIcons.map(({ id, icon: Icon, label, link }) => (
								<a
									key={id}
									href={link}
									title={label}
									className='flex-1 flex items-center justify-center rounded-lg bg-secondary hover:bg-cyan-600 dark:hover:bg-cyan-500 transition-all hover:text-white aspect-square'
								>
									<Icon size={16} />
								</a>
							))}
						</div>

						<div className='border-t border-border my-4'></div>

						{/* LANGUAGE SELECTOR */}
						<div className='space-y-2'>
							<p className='text-xs font-bold text-muted-foreground uppercase tracking-widest'>
								Language
							</p>
							<div className='grid grid-cols-3 gap-2'>
								{languages.map(lang => (
									<button
										key={lang.code}
										onClick={() => setCurrentLang(lang.code)}
										className={`p-2 rounded-lg text-lg transition-all duration-200 ${
											currentLang === lang.code
												? 'bg-cyan-600 scale-110 shadow-lg shadow-cyan-500/50 text-white'
												: 'bg-secondary hover:bg-cyan-600'
										}`}
									>
										{lang.flag}
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	)
}
