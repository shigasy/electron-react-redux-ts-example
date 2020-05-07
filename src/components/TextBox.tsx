import React, { useMemo, useCallback } from 'react';

interface TextBoxProps {
  /** ラベル文字列 */
  label: string;
  /** テキストボックスのタイプ */
  type: `text` | `password`;
  /** テキストボックスに表示する値 */
  value: string;
  /** 値の確定時にその値を親プロパティが取得するためにコールバック関数を提供する */
  onChangeText: (value: string) => void;
}

/**
 * ラベル付きのテキストボックスを提供する
 */

const TextBox: React.FC<TextBoxProps> = (props) => {
  const label: JSX.Element | null = useMemo(() => {
    return props.label ? <label htmlFor="username">{props.label}</label> : null;
  }, [props.label]);

  const onValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      props.onChangeText(value);
    },
    [props.onChangeText]
  );

  return (
    <span>
      {label}
      <input
        name="username"
        id="username"
        type={props.type}
        value={props.value}
        onChange={onValueChange}
      />
    </span>
  );
};

export default TextBox;
