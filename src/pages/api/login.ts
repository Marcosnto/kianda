import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

type Data = {
  email: string;
};

async function loginHandler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  const { email, password } = req.body;

  try {
    const options = {
      method: "POST",
      body: JSON.stringify({ username: email, password: password }),
    };

    const apiRes = await fetch(process.env.NEXT_PUBLIC_JWT_URL || "", options);

    if (!apiRes.ok) {
      res.status(401).end();
    }

    apiRes.json().then((response) => {
      res
        .status(200)
        .setHeader(
          "Set-cookie",
          cookie.serialize("token", response.token, {
            path: "/",
            httpOnly: true,
          })
        )
        .json({
          email: email,
        });
    });
  } catch (error) {
    console.log("Erro: ", error);
    res.status(401).end();
  }
}

export default loginHandler;
