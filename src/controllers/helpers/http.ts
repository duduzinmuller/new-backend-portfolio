export const badRequest = (body: { message?: string }) => ({
  statusCode: 400,
  body,
});

export const created = (body: any) => ({
  statusCode: 201,
  body,
});

export const serverError = () => ({
  statusCode: 500,
  body: {
    message: "Erro interno no servidor",
  },
});

export const ok = (body: any) => ({
  statusCode: 200,
  body,
});
