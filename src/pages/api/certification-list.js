export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            try {
                const data = [
                    {
                        id: 'clf-co2',
                        name: 'AWS Cloud Practitioner'
                    }
                ]
                res.status(200).json({success: true, data});
            } catch(error) {
                res.status(500).json({success: false, error: "Failed to fetch certifications list."});
            }
            break;
        default:
            res.status(405).json({ success: false, message: "Method not allowed" });
            break;
    }
}