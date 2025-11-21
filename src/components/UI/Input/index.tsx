import type { FC, HTMLAttributes, ReactNode, Ref } from 'react';
import InputText from './Text';
import InputEmail from './Email';
import InputPassword from './Password';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'password' | 'email' | 'date';
  label?: string;
  error?: string;
  ref?: Ref<HTMLInputElement>;
  icon?: ReactNode;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  value?: string;
}
const Input: FC<InputProps> = ({ type, ...props }) => {
  switch (type) {
    case 'text':
      return <InputText {...props} />;
    case 'email':
      return <InputEmail {...props} />;
    case 'password':
      return <InputPassword {...props} />;
    default:
      return <InputText {...props} />;
  }
};
export default Input;
