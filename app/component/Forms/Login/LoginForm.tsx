import React from 'react';
import {withFormik} from "formik";
import InnerLoginForm from "./Inner-login-form";
import {LoginFormProps, LoginFormValues} from "./login-Form";
const LoginForm = withFormik<LoginFormProps,LoginFormProps>({
    mapPropsToValues : (props) => {
        return {
            UserName:props.UserName?? '',
            Password :props.Password?? '',
        }
    },
    handleSubmit : async (values,{props}) => {
            console.log('value input:',values)
    }
})(InnerLoginForm)

export default LoginForm;
