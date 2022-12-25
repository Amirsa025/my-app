export interface LoginFormValues {
    UserName : string,
    Password : string,
    inputClassName?:string,
}
export interface LoginFormProps {
    UserName?: string,
    Password?   : string,
    inputClassName?:string,
    iconClassName?:string
    Router?:any
}
