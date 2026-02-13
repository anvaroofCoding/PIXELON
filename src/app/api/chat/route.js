import { NextResponse } from 'next/server'

export async function POST(req) {
	try {
		const { message } = await req.json()

		const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				messages: [{ role: 'user', content: message }],
				model: 'llama-3.3-70b-versatile',
			}),
		})

		const data = await res.json()
		// data.choices[0].message.content dan javobni olish mumkin
		const reply = data?.choices?.[0]?.message?.content || 'Xato yuz berdi'

		return NextResponse.json({ reply })
	} catch (err) {
		console.error('GROQ ERROR:', err)
		return NextResponse.json(
			{ reply: 'Serverga ulanib bo‘lmadi' },
			{ status: 500 },
		)
	}
}
