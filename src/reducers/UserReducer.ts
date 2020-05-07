import { UserActionTypes, CHANGE_USER } from '../actions/UserActions';
import InterfaceUser from '../states/InterfaceUser';

const initUser: InterfaceUser = {
  name: '',
  count: 0,
};

const userReducer = (
  state: InterfaceUser = initUser,
  action: UserActionTypes
): InterfaceUser => {
  switch (action.type) {
    case CHANGE_USER:
      return { ...state, ...action.payload };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // const _: never = action;
      return state;
    }
  }
};

export default userReducer;
