/**
 * Labeled text input used in newsletter signup, contact and application forms.
 */
export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hint?: string;
  name?: string;
}
