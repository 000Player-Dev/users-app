import { User } from "@/interfaces/user.interface";
import { data } from "@/seed/seed";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const userData: User[] = data;

    return NextResponse.json(userData, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { message: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
