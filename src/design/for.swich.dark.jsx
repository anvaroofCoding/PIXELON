'use client'

import { ThemeSwitch } from '@/components/ui/theme-switch'
import { Moon, Sun } from 'lucide-react'

export default function DarkSwitch() {
	return (
		<ThemeSwitch
			modes={['light', 'dark']}
			icons={[
				<Sun key='sun' className='text-foreground' size={16} />,
				<Moon key='moon' className='text-foreground' size={16} />,
			]}
			showInactiveIcons='next'
		/>
	)
}
