'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'
import {
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Twitter,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'

// Animation variants
const fadeIn = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6 },
	},
}

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
}

const itemFadeIn = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5 },
	},
}

export function DesignAgency() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [scrollY, setScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<div className='flex min-h-screen flex-col bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden'>
			<main className='flex-1'>
				{/* About/Team Section */}
				<section id='about' className='w-full py-12 md:py-24 lg:py-32'>
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						variants={fadeIn}
						className='container'
					>
						<div className='grid gap-5 lg:grid-cols-2 lg:gap-3'>
							<motion.div
								initial={{ opacity: 0, x: -50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6 }}
								className='space-y-4 lg:mr-5 mr-0'
							>
								<div className='inline-block rounded-3xl bg-muted px-3 py-1 text-sm'>
									Biz haqimizda
								</div>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
									Bizning tariximiz jamoa haqida hikoya qiladi
								</h2>
								<p className='text-muted-foreground md:text-xl/relaxed'>
									Jamoamiz 2025-yilda tashkil etilgan bo'lib, bizning asosiy
									maqsadimiz mijozlarimizga innovatsion va samarali dizayn
									yechimlarini taqdim etishdir.
								</p>
								<p className='text-muted-foreground md:text-xl/relaxed'>
									Jamoamiz a'zolari o'z sohalarida tajribali mutaxassislardir,
									ular mijozlarimizning ehtiyojlarini chuqur tushunish va ularga
									moslashtirilgan yechimlar yaratish uchun birgalikda ishlaydi.
									Bizning jamoamiz ijodkorlik, hamkorlik va mijozlarga xizmat
									ko'rsatishga sodiqdir.
								</p>

								<div className='flex flex-col gap-3 sm:flex-row'>
									<Button variant='outline' size='lg' className='rounded-3xl'>
										Bizning jarayonimiz
									</Button>
									<Button variant='outline' size='lg' className='rounded-3xl'>
										Jamoaga Taklif qilamiz
									</Button>
								</div>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6 }}
								className='flex items-center justify-center'
							>
								<div className='relative h-[350px] w-full md:h-[450px] lg:h-[500px] overflow-hidden rounded-3xl'>
									<Image
										src='/team.jpg'
										alt='Team Photo'
										fill
										className='object-cover'
									/>
								</div>
							</motion.div>
						</div>
						<div className='mt-16 px-6 pb-10'>
							<motion.h3
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								className='text-2xl font-bold tracking-tighter sm:text-3xl'
							>
								Jamoamiz bilan tanishing
							</motion.h3>
							<motion.div
								variants={staggerContainer}
								initial='hidden'
								whileInView='visible'
								viewport={{ once: true }}
								className='mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
							>
								{[
									{ name: "Feruz Toshpo'latov", role: 'Project Manager' },
									{ name: 'Islom Anvarov', role: 'Frontend Middle Developer' },
									{ name: 'Sunnat Savriyev', role: 'Backend Junior Developer' },
									{ name: 'Dilshod Mirzayev', role: 'UX/UI Designer' },
								].map((member, index) => (
									<motion.div
										key={index}
										variants={itemFadeIn}
										whileHover={{ y: -10 }}
										className='group relative overflow-hidden rounded-3xl'
									>
										<Image
											src='/team.jpg'
											alt={member.name}
											width={300}
											height={400}
											className='h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105'
										/>
										<div className='absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-4 text-white'>
											<h4 className='font-bold'>{member.name}</h4>
											<p className='text-sm'>{member.role}</p>
										</div>
									</motion.div>
								))}
							</motion.div>
						</div>
					</motion.div>
				</section>

				{/* Testimonials */}
				<section className='w-full '>
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						variants={fadeIn}
						className='container'
					>
						<div className='flex flex-col items-center justify-center space-y-4 text-center py-10'>
							<div className='space-y-3'>
								<motion.h2
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.2 }}
									className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'
								>
									Mijozlarimiz nima deyishadi
								</motion.h2>
								<motion.p
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.3 }}
									className='mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'
								>
									Faqat bizning so'zimizga ishonmang - mamnun mijozlarimizdan
									ba'zilarini tinglang
								</motion.p>
							</div>
						</div>
						<motion.div
							variants={staggerContainer}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							className='mx-auto grid max-w-5xl gap-3 py-12 lg:grid-cols-2'
						>
							{[
								{
									quote:
										'Bizga qilib berilgan veb dasturdan minnatdormiz, juda optimallashgan zamonaviy versiyada qilib beribsizlar, xursandman',
									author: 'Azizbek Athamov',
									company: 'Tech Comfort, Tashkent',
								},
								{
									quote:
										"Juda sifatli narxda ammo men o'ylaganimdan yaxshi veb sayt bo'ldi",
									author: 'Shahnoza Sodiqova',
									company: 'Marketing Director, Tashkent',
								},
								{
									quote:
										'Jamoa bilan ishlash juda yoqimli edi. Ular bizning ehtiyojlarimizni tushunish va ajoyib natijalar yaratish uchun haqiqatan ham harakat qilishdi.',
									author: 'Alihan Karimov',
									company: 'CEO, InnovateX',
								},
								{
									quote:
										'Ushbu jamoa bizning dasturimizni yaratishda ajoyib ish qildi. Ular bizning talablarimizni tushunish va ajoyib natijalar yaratish uchun haqiqatan ham harakat qilishdi.',
									author: 'Sardorbek Yuldashev',
									company: 'KF Group, Tashkent',
								},
							].map((testimonial, index) => (
								<motion.div
									key={index}
									variants={itemFadeIn}
									whileHover={{ y: -10 }}
									className='flex flex-col justify-between rounded-3xl border bg-background p-6 shadow-sm'
								>
									<div>
										<div className='flex gap-0.5 text-yellow-500'>
											{[...Array(5)].map((_, i) => (
												<svg
													key={i}
													xmlns='http://www.w3.org/2000/svg'
													width='24'
													height='24'
													viewBox='0 0 24 24'
													fill='currentColor'
													className='h-5 w-5'
												>
													<path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
												</svg>
											))}
										</div>
										<blockquote className='mt-4 text-lg font-medium leading-relaxed'>
											"{testimonial.quote}"
										</blockquote>
									</div>
									<div className='mt-6 flex items-center'>
										<Avatar>
											<AvatarImage src='https://i.pinimg.com/736x/38/1d/6e/381d6edab2cb8693e04e9e5923c20ec6.jpg' />
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
										<div className='ml-4'>
											<p className='font-medium'>{testimonial.author}</p>
											<p className='text-sm text-muted-foreground'>
												{testimonial.company}
											</p>
										</div>
									</div>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				</section>

				{/* Contact Section */}
				<section id='aloqa' className='w-full py-12 md:py-24 lg:py-32'>
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						variants={fadeIn}
						className='container grid items-center gap-3 lg:grid-cols-2 '
					>
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							className='space-y-3'
						>
							<div className='inline-block rounded-3xl bg-muted px-3 py-1 text-sm'>
								Aloqa
							</div>
							<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
								Keling, birgalikda ishlaylik
							</h2>
							<p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Keyingi loyihangizni boshlashga tayyormisiz? Biz bilan
								bog'laning va tasavvuringizni qanday amalga oshirishimiz
								mumkinligini muhokama qiling.
							</p>
							<div className='mt-8 space-y-4'>
								<motion.div
									whileHover={{ x: 5 }}
									className='flex items-start gap-3'
								>
									<div className='rounded-3xl bg-muted p-2'>
										<MapPin className='h-5 w-5 text-primary' />
									</div>
									<div>
										<h3 className='font-medium'>Bizning Manzil</h3>
										<p className='text-sm text-muted-foreground'>
											Toshkent shahri, Chilonzor tumani, Amir Temur ko'chasi,
											123-uy (misol uchun)
										</p>
									</div>
								</motion.div>
								<motion.div
									whileHover={{ x: 5 }}
									className='flex items-start gap-3'
								>
									<div className='rounded-3xl bg-muted p-2'>
										<Mail className='h-5 w-5 text-primary' />
									</div>
									<div>
										<h3 className='font-medium'>Email Us</h3>
										<p className='text-sm text-muted-foreground'>
											rivoquz@gmail.com
										</p>
									</div>
								</motion.div>
								<motion.div
									whileHover={{ x: 5 }}
									className='flex items-start gap-3'
								>
									<div className='rounded-3xl bg-muted p-2'>
										<Phone className='h-5 w-5 text-primary' />
									</div>
									<div>
										<h3 className='font-medium'>Telefon raqam</h3>
										<p className='text-sm text-muted-foreground'>
											+998 (84) 793-20-05
										</p>
									</div>
								</motion.div>
							</div>
							<div className='mt-8 flex space-x-3'>
								{[
									{
										icon: <Instagram className='h-5 w-5' />,
										label: 'Instagram',
									},
									{ icon: <Twitter className='h-5 w-5' />, label: 'Twitter' },
									{ icon: <Linkedin className='h-5 w-5' />, label: 'LinkedIn' },
									{ icon: <Facebook className='h-5 w-5' />, label: 'Facebook' },
								].map((social, index) => (
									<motion.div
										key={index}
										whileHover={{ y: -5, scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
									>
										<Link
											href='#'
											className='rounded-3xl border p-2 text-muted-foreground hover:text-foreground hover:border-primary transition-colors'
										>
											{social.icon}
											<span className='sr-only'>{social.label}</span>
										</Link>
									</motion.div>
								))}
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							className='rounded-3xl border bg-background p-6 shadow-sm'
						>
							<h3 className='text-xl font-bold'>Bizga bog'lanish</h3>
							<p className='text-sm text-muted-foreground'>
								Quyidagi shaklni to'ldiring va biz sizga qayta bog'lanamiz!
							</p>
							<form className='mt-6 space-y-3'>
								<div className='grid gap-3 sm:grid-cols-2'>
									<div className='space-y-2'>
										<label
											htmlFor='first-name'
											className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
										>
											Ism
										</label>
										<Input
											id='first-name'
											placeholder='Ismingizni yozing...'
											className='rounded-3xl'
										/>
									</div>
									<div className='space-y-2'>
										<label
											htmlFor='last-name'
											className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
										>
											Familliy
										</label>
										<Input
											id='last-name'
											placeholder='Familyangizni yozing...'
											className='rounded-3xl'
										/>
									</div>
								</div>
								<div className='space-y-2'>
									<label
										htmlFor='email'
										className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
									>
										Email
									</label>
									<Input
										id='email'
										type='email'
										placeholder='Email manzilingizni yozing...'
										className='rounded-3xl'
									/>
								</div>
								<div className='space-y-2'>
									<label
										htmlFor='message'
										className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
									>
										Xabar
									</label>
									<Textarea
										id='message'
										placeholder='Xabaringizni yozing...'
										className='min-h-[120px] rounded-3xl'
									/>
								</div>
								<motion.div
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									<Button type='submit' className='w-full rounded-3xl'>
										Xabarni yuborish
									</Button>
								</motion.div>
							</form>
						</motion.div>
					</motion.div>
				</section>
			</main>
		</div>
	)
}
