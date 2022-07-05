import {Request, Response} from "express";
import call, {ICall} from "../database/models/Call";

export const createCall = async (request: Request, response: Response): Promise<void> => {
  try {
    //add validation
    const {startDate, endDate, status, supportAgentId} = request.body;
    const Call: ICall = await call.create({
        startDate,
        endDate,
        status,
        supportAgentId
      }
    );
    response.status(201).json(Call);
  } catch (e: any) {
    console.log(e);
    response.status(500).json("Something went wrong");
  }
};

export const getCalls = async (request: Request, response: Response): Promise<void> => {
  try {
    const page: string = request.params.page;
    const offset: number = 10 * Number(page);

    const posts: ICall[] = await call.find().skip(offset).limit(10);
    response.status(200).json(posts);
  } catch (e: any) {
    response.status(500).json("Something went wrong");
  }
};
export const getCallById = async (request: Request, response: Response): Promise<void> => {
  try {
    const id: string = request.params.id;
    const Call: ICall | null = await call.findById(id);
    response.status(200).json(Call);
  } catch (e: any) {
    response.status(500).json("Something went wrong");
  }
};

export const deleteCallById = async (request: Request, response: Response): Promise<void> => {
  try {
    const id: string = request.params.id;
    await call.deleteOne({_id: id});
    response.status(200).json(`Post #${id} was removed successfully`);
  } catch (e: any) {
    console.log(e);
    response.status(500).json("Something went wrong");
  }
};

// export const updateCallById = async (request: Request, response: Response): Promise<void> => {
//   try {
//     const id: string = request.params.id;
//     const {body} = request;
//     await Post.update({
//         ...body
//       },
//       {
//         where: {
//           id
//         }
//       });
//     const post: Post | null = await Post.findOne({
//       where: {
//         id
//       }
//     });
//     response.status(200).json(post);
//   } catch (e: any) {
//     response.status(500).json("Something went wrong");
//   }
// };
