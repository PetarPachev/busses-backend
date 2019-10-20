import { BadRequestException } from '@nestjs/common';
import { Request, Response } from 'express';
import { validate, object, string, ObjectSchema } from 'joi';

const authUserSchema: ObjectSchema = object({
  email: string().email().required(),
  password: string().alphanum().min(6).max(36).required()
});

export const bodyValidatorMiddleware =
  async (req: Request, res: Response, next: Function) => {
    const result = validate(req.body, authUserSchema);

    if (result.error) {
      const errorMessage = result.error.details.shift().message;
      const message: string = errorMessage.replace(/["]/g, '');

      return next(new BadRequestException(`Validation failed: ${message}`));
    }

    next();
  };
