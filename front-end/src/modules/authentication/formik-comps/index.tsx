import { Input, InputProps } from "@modules/common/components/ui/input";
import * as Checkbox from '@radix-ui/react-checkbox';
import clsx from "clsx";
import { ErrorMessage, ErrorMessageProps, FieldInputProps, FieldProps } from 'formik';
import { Check, Eye, EyeOff } from "lucide-react";
import React, { useEffect, useImperativeHandle, useState } from "react";

type FormikInputProps = InputProps & FieldProps;

export const FormikInput: React.FC<FormikInputProps> = ({ field, form, type, className, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [inputType, setInputType] = useState(type)

    useEffect(() => {
        if (type === "password" && showPassword) {
            setInputType("text")
        }

        if (type === "password" && !showPassword) {
            setInputType("password")
        }
    }, [type, showPassword])


    return (
        <div className="flex relative z-0 w-full">
            <Input className={clsx({ "!rounded-r-none": type === 'password' }, className)} type={inputType} {...field} {...props} />
            {type === "password" && (
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="transition-all duration-150 text-primary-100"
                >
                    <div className="px-1 bg-white rounded-r-[10px] border border-beta border-l-0 h-full ">
                        {showPassword ? <Eye className="relative object-cover h-full" /> : <EyeOff className="relative object-cover  h-full" />}
                    </div>
                </button>
            )}
        </div>

    )
}

export const FormikCheckBox: React.FC<FieldProps> = ({ field, form, ...props }: {
    field: FieldInputProps<any>,
    form: any
}) => {
    return (
        <Checkbox.Root {...field} {...props} id={field?.name} className="h-[20px] w-[20px] !bg-white hover:bg-violet-800 center-item " defaultChecked    >
            <Checkbox.Indicator>
                <Check className="text-black" size={15} />
            </Checkbox.Indicator>
        </Checkbox.Root>
    )
}

export const FormikErrorMessage: React.FC<ErrorMessageProps> = ({ name }) => {
    return <ErrorMessage id={name} name={name} component="div" className='text-red-500' />;
}