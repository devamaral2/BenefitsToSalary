import { NextFunction, Request, Response } from 'express';

const errorsCatalog: any = {
  incorrectEmailOrPassword: {
    status: 404,
    messange: 'Email ou password não constam no banco de dados',
  },
  nonExistentField: {
    status: 400,
    messange: 'O usuário deve preenxer todos os campos da requisição',
  },
  emailOrPasswordFormat: {
    status: 404,
    messange: 'Tem algo de errado com o formato do seu email ou senha',
  },
  noExistentEntity: {
    status: 400,
    messange: 'Não existe a conta ou o beneficio',
  },
  invalidToken: {
    status: 400,
    messange: 'O token não é válido',
  },
};

const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.log(err.message);
  const { status } = errorsCatalog[err.message];
  const { messange } = errorsCatalog[err.message];
  return res.status(status).json({ messange });
};

export default errorMiddleware;
