import type { FormAction, FormActionType, FormData, FormState, ValidState } from './LoginForm.types';

export const INITIAL_STATE: FormState = {
  isValid: false,
  validState: {
    email: true,
    password: true,
  },
  formData: {
    email: '',
    password: '',
  },
};

export const actionTypes: { [k in FormActionType]: k } = {
  RESET_VALIDITY: 'RESET_VALIDITY',
  UPDATE_FORM_DATA: 'UPDATE_FORM_DATA',
  VALIDATE: 'VALIDATE',
};

export const formReducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case actionTypes.RESET_VALIDITY:
      return {
        ...state,
        isValid: false,
        validState: { ...INITIAL_STATE.validState },
      };

    case actionTypes.UPDATE_FORM_DATA: {
      const { formData } = action.payload as { formData: Partial<FormData> };

      return {
        ...state,
        validState: { ...INITIAL_STATE.validState },
        isValid: false,
        formData: {
          ...INITIAL_STATE.formData,
          ...formData,
        },
      };
    }

    case actionTypes.VALIDATE: {
      const { formData } = state;
      formData.email = formData.email.trim();
      formData.password = formData.password.trim();

      const validState = Object.fromEntries(
        (Object.entries(INITIAL_STATE.validState) as [keyof ValidState, unknown][])
          .map(([key]) => [
            key,
            Boolean(formData[key as keyof FormData]),
          ]),
      );

      return {
        validState,
        formData,
        isValid: Object.values(validState).every((val) => val),
      };
    }

    default:
      break;
  }
};
