export default function handler(req, res) {
  try {
    res.status(200).send("Hi");
  } catch (error) {
    console.error("Error in handler:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
