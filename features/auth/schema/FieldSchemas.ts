import { z } from 'zod';

export const UserNameSchema = z
  .string()
  .min(6, { message: 'Minimum number of characters 6' })
  .max(30, { message: 'Maximum number of characters 30' })
  .regex(
    /^[a-zA-Z0-9_-]+$/,
    `The username must contain only letters, numbers and -, _`
  );

export const EmailSchema = z
  .string()
  .email('The email must match the format example@example.com');

export const PasswordSchema = z
  .string()
  .min(6, { message: 'Minimum number of characters 6' })
  .max(30, { message: 'Maximum number of characters 30' })
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]).+$/,
    `Password must contain a-z, A-Z,  ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _\` { | } ~`
  );
