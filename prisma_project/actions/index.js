"use server"

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const seedDB = async () => {
  await prisma.post.createMany({
    data: [
      { title: "Hello Prisma" },
      { title: "Prisma + Next.js is easy" },
      { title: "Postgress for quick demos" },
    ],
  })
}

export const getPosts = async () => {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  })
  return posts
}

export const createPost = async (formData) => {
  const title = formData.get("title")
  const description = formData.get("description")

  await prisma.post.create({
    data: {
      title,
      description,
    },
  })

  revalidatePath("/")
}
