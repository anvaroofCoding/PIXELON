'use client'

import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import * as React from 'react'

const ThemeSwitch = React.forwardRef(
	(
		{
			className,
			modes = ['light', 'dark'],
			icons = [],
			showInactiveIcons = 'all',
			...props
		},
		ref,
	) => {
		const { theme, setTheme } = useTheme()
		const [mounted, setMounted] = React.useState(false)

		React.useEffect(() => setMounted(true), [])
		if (!mounted) return null

		const currentIndex = modes.indexOf(theme || modes[0])
		const handleToggle = () =>
			setTheme(modes[(currentIndex + 1) % modes.length])

		const isIconVisible = idx => {
			if (idx === currentIndex) return true
			if (showInactiveIcons === 'none') return false
			if (showInactiveIcons === 'next')
				return idx === (currentIndex + 1) % modes.length
			return true
		}

		return (
			<div
				ref={ref}
				onClick={handleToggle}
				className={cn(
					'relative inline-flex h-8 items-center justify-between rounded-full border border-input bg-background p-1 shadow-sm cursor-pointer transition-colors',
					modes.length === 2 ? 'w-14' : 'w-20',
					className,
				)}
				{...props}
			>
				{icons.map((icon, idx) => (
					<div
						key={idx}
						className={cn(
							'flex h-6 w-6 items-center justify-center rounded-full transition-opacity duration-200',
							currentIndex === idx
								? 'text-foreground dark:text-foreground'
								: 'text-muted-foreground dark:text-muted-foreground',
							isIconVisible(idx) ? 'opacity-100' : 'opacity-0',
						)}
					>
						{React.isValidElement(icon) ? React.cloneElement(icon) : icon}
					</div>
				))}

				{/* Slider */}
				<div
					className={cn(
						'absolute h-6 w-6 rounded-full bg-gray-500/10 transition-all duration-200 ease-in-out dark:bg-white/30',
						currentIndex === 0 ? 'left-1' : 'left-6.5',
					)}
				/>
			</div>
		)
	},
)

ThemeSwitch.displayName = 'ThemeSwitch'
export { ThemeSwitch }
