import { TextareaAutosizeProps } from 'react-textarea-autosize';

export interface TextareaProps
  extends Omit<TextareaAutosizeProps, 'onChange' | 'onBlur' | 'maxRows'> {
  onChange: (value: string) => void;
  onBlur?: () => void;
}
