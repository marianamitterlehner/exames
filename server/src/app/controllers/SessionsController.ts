import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import authConfig from '../../config/auth';
import Administrator from '../models/Administrator';

interface Request {
  registration: string;
  password: string;
}

interface Response {
  administrator: Administrator;
  token: string;
}

class SessionsAdministratorController {
  public async store({ registration, password }: Request): Promise<Response> {
    const administratorRepository = getRepository(Administrator);
    const administrator = await administratorRepository.findOne({ where: { registration } });

    if (!administrator) {
      throw new Error('Combinação de matricula/senha incorreta.');
    }

    const checkPassword = await compare(password, administrator.password);

    if (!checkPassword) {
      throw new Error('Combinação de matricula/senha incorreta.');
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: administrator.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      administrator,
      token,
    };
  }
}

export default SessionsAdministratorController;