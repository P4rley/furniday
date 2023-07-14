import connectMongoDB from "@/config/mongodb";
import Category from "@/models/Category";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();
    const categories = await Category.find();

    return NextResponse.json({ categories }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { name: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();

    const name = data.get("name");

    await connectMongoDB();

    await Category.create({ name });

    return NextResponse.json({ message: "Category created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { name: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id");

    await connectMongoDB();
    await Category.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Category has been deleted" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error });
  }
}
