import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveysUserRepository";

class AnswerController {

  async execute(request: Request, response: Response) {
    const { value } = request.params;
    const { u } = request.query;

    const SurveysUserRepository = getCustomRepository(SurveysUsersRepository);

    const surveyUser = await SurveysUserRepository.findOne({
      id: String(u)
    });

    if(!surveyUser) {
      return response.status(400).json({
        error: "Survey User doesn't exists!",
      });
    }

    surveyUser.value = Number(value);

    await SurveysUserRepository.save(surveyUser);

    return response.json(surveyUser);
  }
}

export { AnswerController }