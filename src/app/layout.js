import AosInit from '@/components/AosInit'
import FooterMain from '@/shared/footer.main'
import NavbarMain from '@/shared/navbar.main'
import { ThemeProvider } from 'next-themes'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Providers from './providers'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata = {
	title: 'PIXELON',
	description: 'PIXELON - Raqamli kelajagingizni birga yarating',
	icons: {
		icon: '/pixelon.png',
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Providers>
					<ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
						<NavbarMain />
						<AosInit />
						{children}
						<FooterMain />
					</ThemeProvider>
				</Providers>
			</body>
		</html>
	)
}
