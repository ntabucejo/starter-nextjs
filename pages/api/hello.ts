import type { NextApiHandler } from "next";

const handler: NextApiHandler = (request, response) => {
  response.status(200).json({ name: "Nikko Abucejo" });
};

export default handler;
