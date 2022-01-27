export interface IInputValidation {
  isInputvalid: boolean;
  errorMessage: string;
}

export function validateEmailInput(email: string): boolean {
  return !!email.match(/\S+@\S+\.\S+/i);
}

export function inputValidate(
  email: string,
  password: string
): IInputValidation {
  if (password.length <= 7) {
    return { isInputvalid: false, errorMessage: "The password must be above 8 characters" };
  }
  
  if (!validateEmailInput(email)) {
    return { isInputvalid: false, errorMessage: "Invalid email/username" };
  }

  return { isInputvalid: true, errorMessage: "" };
}
