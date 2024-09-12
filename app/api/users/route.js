import { NextResponse } from 'next/server';

const API_KEY = process.env.CLERK_SECRET_KEY;

export async function GET() {
  try {
    const response = await fetch("https://api.clerk.dev/v1/users", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
