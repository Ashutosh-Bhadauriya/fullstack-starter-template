import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

interface Params {
  id: string;
}

interface RequestWithParams {
  params: Params;
}

export async function GET(request: Request, { params }: RequestWithParams) {
  console.log(params);
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return NextResponse.json(post);
}
