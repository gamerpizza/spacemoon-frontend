import { getToken } from "next-auth/jwt";

const secret = process.env.SECRET;

export default async (req: any, res: any) => {
  const token = await getToken({ req, secret });
  if (token) {
    res.json(token);
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
};
