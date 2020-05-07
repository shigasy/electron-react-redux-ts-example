import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InterfaceUser from '../states/InterfaceUser';
import CountButton from './CountButton';
import TextBox from './TextBox';
import { InterfaceState } from '../states/InterfaceState';
import { changeUserAction } from '../actions/UserActions';

const UserForm: React.FC = () => {
  // stateの変更を受け取れる。storeのstateを参照できる
  // connect()でやっていたことがhooksで簡潔に書ける
  const { name, count } = useSelector<InterfaceState, InterfaceUser>(
    (a) => a.user
  );
  const dispatch = useDispatch(); // actionをreducerに送信するdispatch関数を取得
  const onNameChange = useCallback((value: string) => {
    dispatch(changeUserAction({ name: value }));
  }, []); // 関数のメモ化
  // const onNameChange = (value: string) => {
  // dispatch(changeUserAction({ name: value, count }));
  // };
  const onCountClick = useCallback(() => {
    dispatch(changeUserAction({ count: count + 1 }));
    // 関数外の変数は、関数が（再）定義されたものに固定化される。
    // 関数外の変数を使用する時、第2引数で指定すると、指定した変数が変わったときに、関数が再定義される。
  }, [count]);

  return (
    <div>
      <p>
        <TextBox
          value={name}
          label="ユーザー名"
          type="text"
          onChangeText={onNameChange}
        />
      </p>
      <p>名前: {name}</p>
      <p>
        <CountButton count={count} onClick={onCountClick} label="訪問" />
      </p>
    </div>
  );
};

export default UserForm;
