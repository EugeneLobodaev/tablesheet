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
  name: string | number
  key?: any;
  className?: string;
}

export interface InputType {
  defaultValue: string | number
  type: string
  placeholder: string 
  name: string 
  onChange: any
}

export interface PagiProps {
  onClick: any
  limit: number

}