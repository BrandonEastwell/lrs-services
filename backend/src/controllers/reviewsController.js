export default async function getAllReviews(req, res, next) {
    try {
        const dataset = await import("../../datasets/dataset_Google-Maps-Reviews-Scraper_2025-03-11_14-52-01-450.json", {
            assert: { type: "json" }
        });

        if (!dataset) {
            res.status(404);
            return res.send("Reviews not found");
        }

        res.json(dataset);
    } catch (e) {
        next(e);
    }
}
