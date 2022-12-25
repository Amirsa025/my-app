import React from 'react';
import Input from "../../../Ui/Input";
import Button from "../../../Ui/button";
import {Form} from "formik";

const InnerLoginForm = () => {
    return (
        <Form className="pb-[52px]">
            <Input type="text" InputName={'UserName'} label={"User Name"} placeholder={"Enter your username"}/>
            <Input InputName={'Password'} label={"password"} placeholder={"Enter your password"}/>
            <Button btnClassName={"w-full hover:bg-indigo-800"}>Login</Button>
        </Form>
    );
};

export default InnerLoginForm;
