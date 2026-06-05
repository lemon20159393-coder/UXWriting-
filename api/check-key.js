export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const hasKey = !!process.env.ANTHROPIC_API_KEY;
  return res.status(200).json({ hasKey });
}
