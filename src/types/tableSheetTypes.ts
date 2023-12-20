export interface TableSheetResponseType {
  completed: boolean;
  id: number | null;
  title: string;
  userId: number | null;
}

export interface ActionTypes {
  type: string;
  payload: any;
}

export interface ButtonProps {
  onClick: any;
  name: string;
  key?: any;
  className?: string;
}