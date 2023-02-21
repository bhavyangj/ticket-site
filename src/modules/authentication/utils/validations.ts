import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class LoginValidator {
  @IsEmail({}, { message: "Invalid email address" })
  email!: string;

  @MinLength(6)
  password!: string;
}
