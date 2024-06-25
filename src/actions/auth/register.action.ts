import { defineAction, z } from 'astro:actions';

export const registerUser = defineAction({
  accept: 'form',
  input: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
    remember_me: z.boolean().optional(),
  }),
  handler: async ({ name, password, remember_me, email }) => {
    console.log({ name, password, remember_me, email });

    return true;
  },
});
