export interface AdminProps {
  id: number;
  index: number;
  name: string;
  email: string;
  destroyAdmin: (id: number) => void;
  showAdmin: (id: number) => void;
}
