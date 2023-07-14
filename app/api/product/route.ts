import connectMongoDB from "@/config/mongodb";
import Product from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();

    await connectMongoDB();

    const image = data.get("image");
    const name = data.get("name");
    const categoryId = data.get("categoryId");
    const price = data.get("price");
    const description = data.get("description");

    await Product.create({ image, name, categoryId, price, description });

    return NextResponse.json({ message: "Product created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function GET() {
  try {
    await connectMongoDB();

    const products = await Product.find()
      .populate("categoryId", "_id name")
      .exec();

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}
