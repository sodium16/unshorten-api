export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ success: false, error: "Missing URL" });
  }

  try {
    const response = await fetch(url, {
      method: "GET",
      redirect: "follow"
    });

    return res.json({
      success: true,
      requested: url,
      resolved: response.url
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message
    });
  }
}
