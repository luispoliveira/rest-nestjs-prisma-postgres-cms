





export class CreateUserDto {
  username: string;
email: string;
password: string;
resetPasswordToken?: string;
resetPasswordExpires?: Date;
createdBy?: string;
updatedBy?: string;
}
