const initialState = {
  invalid: false
};

export default function passwordForm (state = initialState, action) {
  switch (action.type) {
    case 'INVALID_PASSWORD_TRUE': {
      return {
        ...state,
        ...action.payload
      };
    }
    case 'INVALID_PASSWORD_FALSE': {
      return {
        ...state,
        ...action.payload
      };
    }
    default: return { ...state };
  }
}
