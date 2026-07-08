export interface DropdownOption {
  id: number;
  label: string;
}
export interface CustomDropdownProps {
  options: DropdownOption[];
  value: DropdownOption | null;
  onChange: (id: number) => void;
  isLoading?: boolean;
}
