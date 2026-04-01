export default async function handler(req, res) {
  const { rc } = req.query;

  if (!rc) {
    return res.status(400).json({ error: "No vehicle number" });
  }

  try {
    const response = await fetch(
      "https://vehicleinfobyterabaap.vercel.app/lookup?rc=" + rc
    );

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);

  } catch (e) {
    res.status(500).json({ error: "API Failed" });
  }
}
