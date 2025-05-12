import { z } from 'zod';

import { EmailSchema } from '@/features/auth/schema/FieldSchemas';

export const EmailVerificationScheme = z.object({
  email: EmailSchema,
});
