import InterfaceUser from '../states/InterfaceUser';

// Action Name
export const CHANGE_USER = 'CHANGE_USER' as const; // 文字列リテラルになり、オブジェクト内でも推論が効く。switch-caseなど。

// Action Creator Interface
interface ChangeUserAction {
  type: typeof CHANGE_USER;
  payload: Partial<InterfaceUser>;
}

// Action Creator
export const changeUserAction = (
  user: Partial<InterfaceUser>
): ChangeUserAction => ({
  type: 'CHANGE_USER',
  payload: user,
});

export type UserActionTypes = ChangeUserAction;
