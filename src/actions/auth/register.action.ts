import { defineAction, z } from 'astro:actions';

export const registerUser = defineAction({
  accept: 'form',
  input: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
    remember_me: z.boolean().optional(),
  }),
  handler: async ({ name, email, password, remember_me }, { cookies }) => {
    if (remember_me) {
      cookies.set('email', email, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365), // 1 año,
        path: '/',
      });
    } else {
      cookies.delete('email', {
        path: '/',
      });
    }

    return { ok: true, msg: 'Usuario creado' };
  },
});
