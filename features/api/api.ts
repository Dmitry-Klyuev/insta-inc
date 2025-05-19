import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type {
  MeResponse,
  RegistrationConfirmationRequest,
  RegistrationEmailResendingRequest,
  RegistrationRequest,
} from '@/features/api/types';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_INCTAGRAM_URL,
  }),
  endpoints: (build) => ({
    me: build.query<MeResponse, void>({
      query: () => 'auth/me',
    }),

    registration: build.mutation<void, RegistrationRequest>({
      query: (body) => {
        return {
          method: 'POST',
          url: 'auth/registration',
          body,
        };
      },
    }),

    registrationConfirmation: build.mutation<
      void,
      RegistrationConfirmationRequest
    >({
      query: (body) => {
        return {
          method: 'POST',
          url: 'auth/registration-confirmation',
          body,
        };
      },
    }),

    registrationEmailResending: build.mutation<
      void,
      RegistrationEmailResendingRequest
    >({
      query: (body) => {
        return {
          method: 'POST',
          url: 'auth/registration-email-resending',
          body,
        };
      },
    }),
  }),
});

export const {
  useMeQuery,
  useRegistrationMutation,
  useRegistrationConfirmationMutation,
  useRegistrationEmailResendingMutation,
} = api;
