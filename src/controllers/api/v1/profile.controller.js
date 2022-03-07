import * as profileModels from "../../../models/api/v1/profile.model";
import { HttpException, HttpStatus } from '../../../errors/HttpException.error';

export async function updateProfile(request, response){
    const payload= request.body;
    const id = request.params.id;
    const result=await profileModels.updateProfile(id,payload.firstName, payload.lastName)

    response.status(201).json(result);
}

export async function getProfile(request, response){
    const id= request.params.id;
    const result=await profileModels.getProfile(id);
    
    if (!result) {
        return next(new HttpException('Profile not found', HttpStatus.NOT_FOUND));
      }
    response.status(201).json({result});
}

export async function getListPostById(request, response){
    const id=request.user.id;
    const result=await profileModels.getListPostByUser(id)
    response.status(201).json({result});
}

export async function deleteUser(request, response){
    const id=request.user.id;
    const result=await profileModels.deleteUser(id)
    response.status(201).json({result});
}