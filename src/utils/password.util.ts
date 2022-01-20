import * as bcrypt from "bcrypt";

export class PasswordUtil {
  static async hash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }

  static async compare(storedPassword: string, suppliedPassword: string): Promise<boolean> {
    return await bcrypt.compare(suppliedPassword, storedPassword);
  }
}
