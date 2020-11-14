export interface NavItem {
  id:string;
  displayName: string;
  disabled?: boolean;
  iconName: string;
  module:string;
  permission?:string;
  route?: string;
  children?: NavItem[];
}