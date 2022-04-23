export interface TextareaProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}
