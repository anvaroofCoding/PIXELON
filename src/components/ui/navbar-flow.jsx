'use client'

import {
	ChevronDown as ArrowDown,
	ChevronUp as ArrowUp,
	X as Close,
	Menu as List,
} from 'lucide-react'
import React, { useState } from 'react'

const NavbarFlow = ({
	emblem,
	links = [],
	extraIcons = [],
	rightComponent,
}) => {
	const [mobileMenu, setMobileMenu] = useState(false)
	const [openedSections, setOpenedSections] = useState({})

	const toggleSection = text => {
		setOpenedSections(prev => ({ ...prev, [text]: !prev[text] }))
	}

	return (
		<div className='sticky top-0 w-full z-50 bg-gradient-to-r from-blue-400/30 via-cyan-400/20 to-purple-500/20 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-800/30 dark:from-blue-900/30 dark:via-cyan-900/20 dark:to-purple-900/20'>
			<div className='max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4 w-full'>
				{/* Logo */}
				<div className='text-gray-900 dark:text-white font-bold text-lg md:text-xl'>
					{emblem}
				</div>

				{/* Desktop Links */}
				<div className='hidden md:flex items-center gap-6'>
					{links.map(link =>
						link.submenu ? (
							<div key={link.text} className='relative group'>
								<span className='cursor-pointer text-gray-800 dark:text-gray-200 font-medium'>
									{link.text}
								</span>
								<div className='absolute left-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity border border-gray-200 dark:border-gray-700 z-50'>
									{React.Children.map(
										link.submenu.props.children,
										(child, idx) => (
											<div
												key={idx}
												className='px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg'
											>
												{child}
											</div>
										),
									)}
								</div>
							</div>
						) : (
							<a
								key={link.text}
								href={link.url || '#'}
								className='text-gray-800 dark:text-gray-200 font-medium hover:text-gray-900 dark:hover:text-white transition-colors'
							>
								{link.text}
							</a>
						),
					)}
				</div>

				{/* Right Icons & Mobile Menu Button */}
				<div className='flex items-center gap-2'>
					<div className='hidden md:flex items-center gap-2'>
						{extraIcons.map((icon, idx) => (
							<div key={idx}>{icon}</div>
						))}
					</div>
					{rightComponent && (
						<div className='hidden md:flex'>{rightComponent}</div>
					)}

					<button
						onClick={() => setMobileMenu(!mobileMenu)}
						className='md:hidden text-gray-700 dark:text-gray-300'
					>
						{mobileMenu ? (
							<Close className='w-5 h-5' />
						) : (
							<List className='w-5 h-5' />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{mobileMenu && (
				<div className='md:hidden w-full border-t border-gray-200/30 dark:border-gray-800/30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md'>
					<nav className='flex flex-col p-4 space-y-2'>
						{links.map(link => (
							<div key={link.text}>
								{link.submenu ? (
									<>
										<button
											onClick={() => toggleSection(link.text)}
											className='w-full flex justify-between items-center px-4 py-2 text-gray-800 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-800/50'
										>
											{link.text}
											{openedSections[link.text] ? (
												<ArrowUp className='w-4 h-4' />
											) : (
												<ArrowDown className='w-4 h-4' />
											)}
										</button>
										{openedSections[link.text] && (
											<div className='pl-4 mt-1 space-y-1'>
												{React.Children.map(
													link.submenu.props.children,
													(child, idx) => (
														<div
															key={idx}
															className='px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg'
														>
															{child}
														</div>
													),
												)}
											</div>
										)}
									</>
								) : (
									<a
										href={link.url || '#'}
										className='block px-4 py-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-gray-800/50'
									>
										{link.text}
									</a>
								)}
							</div>
						))}
					</nav>
				</div>
			)}
		</div>
	)
}

export default NavbarFlow
