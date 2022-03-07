import * as userModels from "../../../models/api/v1/user.model.js";
import { HttpException, HttpStatus } from '../../../errors/HttpException.error';
import jwt from "jsonwebtoken";

export async function createUser(request, response){
    const payload= request.body;
    const result=await userModels.registerDto(payload.email, payload.password)
    response.status(201).json(result);
}

export async function loginUser(request, response){
    const result=await userModels.LoginDto(request.body);
    if (!result) {
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      }
      console.log(result);
    const token=jwt.sign({id:result.id}, 'SECRET')
    response.status(201).json({result, token});
}