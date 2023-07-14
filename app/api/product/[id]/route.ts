import connectMongoDB from "@/config/mongodb";
import Product from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  try {
    await connectMongoDB();

    const product = await Product.findById(id);

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
