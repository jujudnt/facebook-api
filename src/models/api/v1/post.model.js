import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export const createPostDto = async ({ message, authorId }) =>
  prisma.post.create({
    data: {
      message,
      Author: {
        connect: { id: authorId },
      },
    },
  });

  export const updatePostDto = (id, { message }) =>
  prisma.post.update({
    where:{ id },
    data: {
      message,
    },
  });
  
export async function getListPost(){
    return prisma.post.findMany()
}

export const getPost = (id) =>
  prisma.post.findUnique({
    where: { id },
  })

export const deletePost = (id) =>
  prisma.post.delete({
    where: { id },
  });