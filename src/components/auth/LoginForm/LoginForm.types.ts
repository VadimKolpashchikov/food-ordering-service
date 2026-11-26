export interface FormData {
  email: string;
  password: string;
}

export interface ValidState {
  email: boolean;
  password: boolean;
}

export interface FormState {
  isValid: boolean;
  validState: ValidState;
  formData: FormData;
}

export type FormActionType = 'RESET_VALIDITY' | 'UPDATE_FORM_DATA' | 'VALIDATE';

export type FormAction = {
  type: 'RESET_VALIDITY';
} | {
  type: 'UPDATE_FORM_DATA';
  payload: {
    formData: Partial<FormData>;
  };
} | {
  type: 'VALIDATE';
};
