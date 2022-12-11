import { logger } from "@/config/logger";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Check for secret to confirm this is a valid request
  if (req.query?.secret !== process.env.SECRET_TOKEN_REVALIDATE) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const slug = req.body.data.slug;
  logger.info(`revalidate: ${slug}`);
  if (!slug) return res.status(400).json({ message: "slug is required" });

  try {
    await res.revalidate(`/blog/${slug}`);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
};

export default handler;
