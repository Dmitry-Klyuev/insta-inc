export type ApiErrorResponse = {
  data: {
    error: string;
    messages: Array<{
      message: string;
      field: string;
    }>;
    status: number;
  };
};

export type MeResponse = {
  userId: number;
  userName: string;
  email: string;
  isBlocked: boolean;
};

export type RegistrationRequest = {
  userName: string;
  email: string;
  password: string;
  baseUrl: string;
};

export type RegistrationEmailResendingRequest = Pick<
  RegistrationRequest,
  'email' | 'baseUrl'
>;

export type RegistrationConfirmationRequest = { confirmationCode: string };
