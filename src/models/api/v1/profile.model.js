import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function updateProfile(id, firstName, lastName){
    return prisma.profile.update({
        where:{
            userId: id,
        },
        data:{
            firstName: firstName,
            lastName: lastName
        }
    })
}

export async function getProfile(id){
    return prisma.profile.findUnique({
        where:{
            userId: id,
        }
    })
}

export async function getListPostByUser(id){
    return prisma.post.findMany({
        where:{
            authorId: id,
            }
    })
}

export async function deleteUser(id){
    return prisma.profile.delete({
        where:{
            userId: id
        }
    })
}