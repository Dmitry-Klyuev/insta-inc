import { z } from 'zod';

import {
  EmailSchema,
  PasswordSchema,
  UserNameSchema,
} from '@/features/auth/schema/FieldSchemas';

export const RegistrationSchema = z
  .object({
    userName: UserNameSchema,
    email: EmailSchema,
    password: PasswordSchema,
    passwordConfirm: z.string(),
    checkbox: z.boolean().refine((val) => val, {
      message: 'You must accept the terms and conditions',
    }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'Passwords do not match',
    path: ['passwordConfirm'],
  });
