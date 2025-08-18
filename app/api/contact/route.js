export async function POST(req) {
  try {
    const body = await req.json();
    // Here you can integrate with Telegram bot, email, CRM, etc.
    // For demo, we just log to server console:
    console.log('CONTACT_FORM', body);
    return new Response(JSON.stringify({ ok: true, message: "Заявка принята. Спасибо!" }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, message: "Некорректные данные." }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }
}
