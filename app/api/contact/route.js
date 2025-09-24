// app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs'; // nodemailer работает только в Node, не в Edge

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || ''));
}

export async function POST(req) {
  try {
    const body = await req.json();
    const name = (body?.name || '').trim();
    const phone = (body?.phone || '').trim();
    const email = (body?.email || '').trim();
    const comment = (body?.comment || '').trim();

    if (!name || !phone || !email || !validateEmail(email)) {
      return NextResponse.json({ message: 'Проверьте имя, телефон и email.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE !== 'false',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Сайт" <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL || process.env.SMTP_USER,
      subject: `Новая заявка: ${name}`,
      text: `Имя: ${name}\nТелефон: ${phone}\nEmail: ${email}\nКомментарий: ${comment}`,
      html: `<h3>Новая заявка</h3>
             <p><b>Имя:</b> ${name}</p>
             <p><b>Телефон:</b> ${phone}</p>
             <p><b>Email:</b> ${email}</p>
             ${comment ? `<p><b>Комментарий:</b> ${comment}</p>` : ''}`,
      replyTo: `${name} <${email}>`,
    });

    return NextResponse.json({ message: 'Заявка отправлена. Мы перезвоним в течение 15 минут.' });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ message: 'Ошибка отправки. Попробуйте позже.' }, { status: 500 });
  }
}
