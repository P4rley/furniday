import connectMongoDB from "@/config/mongodb";
import Category from "@/models/Category";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  try {
    await connectMongoDB();

    const category = await Category.findById(id);

    return NextResponse.json(category, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
