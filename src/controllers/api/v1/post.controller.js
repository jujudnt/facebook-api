import * as userModels from "../../../models/api/v1/post.model.js";
import { HttpException, HttpStatus } from '../../../errors/HttpException.error';

export const createPost = async ({ body, user }, response) => {
    const { message } = body;
    const result = await userModels.createPostDto({
      message,
      authorId: user.id,
    });
  
    response
      .status(201)
      .json({ data: { result } });
  }


export const updatePost = async ({ params: { id }, body }, response) => {
    const result = await userModels.updatePostDto(Number(id), body);
  
    response
      .status(200)
      .json({ data: { result } });
  }

export const getPost = async ({ params: { id } }, response, next) => {
    const result = await userModels.getPost(Number(id));
    if (!result) {
      return next(new HttpException('Post not found', HttpStatus.NOT_FOUND));
    }
  
    response
      .status(200)
      .json({ data: { result } });
  }

export async function getListPost(request, response, next){
    const result=await userModels.getListPost()
    if(!result) {
      return next(new HttpException('Any post exists', HttpStatus.NOT_FOUND));
    }
    response.status(201).json({result});
}

export const deletePost = async ({ params : { id }}, response) => {
    await userModels.deletePost(Number(id));
  
    response
      .status(204)
      .end();
  }