import { NextResponse } from "next/server";

const API_URL =
  "https://api.telegram.org/bot6249224875:AAEHXV0GME2S-zumrTGg94sMFZIXIow5Ubk";

const CHAT_ID = 5777355636;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const message = searchParams.get("message");

  const res = await fetch(
    `${API_URL}/sendMessage?chat_id=${CHAT_ID}&parse_mode=HTML&text=${message}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();

  return NextResponse.json({ data });
}
