// components/AosInit.jsx
'use client' // client component bo‘lishi uchun

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function AosInit() {
	useEffect(() => {
		AOS.init({
			duration: 700,
			once: true,
			easing: 'ease-in-out',
		})
	}, [])

	return null
}
