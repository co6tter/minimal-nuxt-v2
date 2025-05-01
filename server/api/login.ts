export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;

  if (email === "user@example.com" && password === "password") {
    return { success: true };
  } else {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
      message: "メールアドレスまたはパスワードが正しくありません。",
    });
  }
});
