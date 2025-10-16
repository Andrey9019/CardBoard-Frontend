export interface FormFieldConfig {
  name: 'email' | 'password' | 'confirmPassword' | 'name';
  label: string;
  type: string;
  placeholder: string;
}

export const signinFields: FormFieldConfig[] = [
  {
    name: 'email',
    label: 'Електронна пошта',
    type: 'email',
    placeholder: 'Введіть свою електронну адресу',
  },
  {
    name: 'password',
    label: 'Пароль',
    type: 'password',
    placeholder: 'Введіть свій пароль',
  },
];

export const signupFields: FormFieldConfig[] = [
  ...signinFields,
  {
    name: 'confirmPassword',
    label: 'Підтвердіть пароль',
    type: 'password',
    placeholder: 'Підтвердіть свій пароль',
  },
  {
    name: 'name',
    label: "Ім'я",
    type: 'text',
    placeholder: "Введіть своє ім'я",
  },
];

export const getFormFields = (
  formType: 'signup' | 'signin',
): FormFieldConfig[] => {
  return formType === 'signup' ? signupFields : signinFields;
};
