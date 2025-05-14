'use client';

import { type ChangeEvent, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import {
  Controller,
  type FieldValues,
  type SubmitHandler,
  useForm,
} from 'react-hook-form';
import { z } from 'zod';

import { useRegistrationMutation } from '@/features/api/api';
import type { ApiErrorResponse } from '@/features/api/types';
import SocialAuth from '@/features/auth/components/socialAuth/SocialAuth';
import { RegistrationSchema } from '@/features/auth/schema/RegistrationSchema';
import { Button } from 'shared/ui/button/Button';
import { Card } from 'shared/ui/card/Card';
import { Checkbox } from 'shared/ui/checkbox/Checkbox';
import { Input } from 'shared/ui/input/Input';
import { DefaultModal } from 'shared/ui/modal/defaultModal/DefaultModal';

import styles from './Registration.module.scss';

type RegistrationFormType = z.infer<typeof RegistrationSchema>;

const Registration = () => {
  const {
    register,
    handleSubmit,
    control,
    trigger,
    getValues,
    reset,
    setError,
    formState: { errors, isValid },
  } = useForm<RegistrationFormType>({
    resolver: zodResolver(RegistrationSchema),
    mode: 'onBlur',
    defaultValues: {
      userName: '',
      checkbox: false,
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });
  const [login, { isLoading, isSuccess }] = useRegistrationMutation();
  const [open, setOpen] = useState(false);

  const onSubmit: SubmitHandler<RegistrationFormType> = async (data) => {
    const payload = {
      userName: data.userName,
      email: data.email,
      password: data.password,
      baseUrl: `${window.location.origin}/auth/registration-confirmation`,
    };
    try {
      await login(payload).unwrap();
      setOpen(true);
    } catch (error) {
      const apiError = error as ApiErrorResponse;
      if (apiError?.data?.messages) {
        apiError.data.messages.forEach((err) => {
          setError(err.field as keyof RegistrationFormType, {
            type: 'server',
            message: err.message,
          });
        });
      }
    }
  };

  const handleCheckboxChange = async (
    e: ChangeEvent<HTMLInputElement>,
    field: FieldValues
  ) => {
    field.onChange(e);
    await trigger('checkbox');
  };

  const closeModalHandler = () => {
    if (isSuccess) {
      reset();
    }
    setOpen(false);
    reset(getValues());
  };

  return (
    <div className={styles.container}>
      <DefaultModal
        title="Email sent"
        isOpen={open}
        onClose={closeModalHandler}
        maxWidth={380}
        closeBtnTitle="Ok"
        description={
          <p>
            We have sent a link to confirm your email to{' '}
            <span>{getValues('email')}</span>
          </p>
        }
      />
      <Card>
        <h1 className={styles.title}>Sign Up</h1>
        <SocialAuth />
        <div className={styles.registrationContainer}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputContainer}>
              <Input
                label="Username"
                placeholder="Write your Username"
                {...register('userName')}
                error={!!errors.userName}
                errorText={errors.userName?.message}
              />
              <Input
                placeholder="Epam@epam.com"
                label="Email"
                {...register('email')}
                error={!!errors.email}
                errorText={errors.email?.message}
              />
              <Input
                label="Pssword"
                type="password"
                {...register('password')}
                error={!!errors.password}
                errorText={errors.password?.message}
              />
              <Input
                label="Password confirmation"
                type="password"
                {...register('passwordConfirm')}
                error={!!errors.passwordConfirm}
                errorText={errors.passwordConfirm?.message}
              />
            </div>
            <div className={styles.checkboxContainer}>
              <Controller
                control={control}
                name={'checkbox'}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    checked={field.value}
                    onChange={(e) => handleCheckboxChange(e, field)}
                    valueFontSize={12}
                    label={
                      <div>
                        I agree to the&nbsp;
                        <Link
                          href="/auth/terms-of-service"
                          className={styles.link}
                        >
                          Terms of Service
                        </Link>
                        &nbsp;and&nbsp;
                        <Link
                          href="/auth/privacy-policy"
                          className={styles.link}
                        >
                          Privacy Policy
                        </Link>
                      </div>
                    }
                  />
                )}
              />
              {errors.checkbox && (
                <span className={styles.error}>{errors.checkbox?.message}</span>
              )}
            </div>
            <Button
              title="Sign Up"
              variant="primary"
              type="submit"
              disabled={!isValid || isLoading}
            />
          </form>
          <div className={styles.buttonSignInContainer}>
            <p>Do you have an account?</p>
            <Button title="Sign In" variant={'link'} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Registration;
