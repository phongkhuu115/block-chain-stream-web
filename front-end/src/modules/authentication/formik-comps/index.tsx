import { notifySuccess } from "@modules/common/components/toast-comps";
import { Button } from "@modules/common/components/ui/button";
import { Input, InputProps } from "@modules/common/components/ui/input";
import * as Checkbox from '@radix-ui/react-checkbox';
import { Label } from "@radix-ui/react-label";
import clsx from "clsx";
import { ErrorMessage, ErrorMessageProps, FieldInputProps, FieldProps } from 'formik';
import { Check, Copy, Eye, EyeOff } from "lucide-react";
import React, { useEffect, useState } from "react";

type FormikInputProps = { label: string, isCopyable: boolean } & InputProps & FieldProps;

export const FormikInput: React.FC<FormikInputProps> = ({ field, form, type, label, isCopyable, className, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [inputType, setInputType] = useState(type)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        const hasError = (form?.errors[field.name] && form?.touched[field.name]) ? true : false
        setHasError(hasError)

        if (type === "password" && showPassword) {
            setInputType("text")
        }

        if (type === "password" && !showPassword) {
            setInputType("password")
        }
    }, [type, showPassword, form])

    return (
        <>
            <Label htmlFor={field?.name}>{label}</Label>
            <div className={clsx("flex relative z-0 w-full pt-2 ", { "pb-0": hasError, "pb-2": !hasError, "gap-2 center-item": isCopyable })}>
                <Input className={clsx({ "!rounded-r-none": type === 'password' }, className)} type={inputType}
                    {...field}
                    {...props}
                />
                {type === "password" && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="transition-all duration-150"
                    >
                        <div className="px-1 bg-white text-black rounded-r-[10px] border border-beta border-l-0 h-full ">
                            {showPassword ? <Eye className="relative object-cover h-full" /> : <EyeOff className="relative object-cover  h-full" />}
                        </div>
                    </button>
                )}
                {isCopyable && (
                    <Button onClick={() => {
                        navigator.clipboard.writeText(props.value as string);
                        notifySuccess("Copied to clipboard")
                    }}>
                        <Copy className="text-white" />
                    </Button>
                )}
            </div>
            <FormikErrorMessage name={field?.name} className={clsx("py-2")} />
        </>

    )
}

export const FormikInputWithActions: React.FC<FormikInputProps> = ({ field, form, type, label, className, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [inputType, setInputType] = useState(type)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        const hasError = (form?.errors[field.name] && form?.touched[field.name]) ? true : false
        setHasError(hasError)

        if (type === "password" && showPassword) {
            setInputType("text")
        }

        if (type === "password" && !showPassword) {
            setInputType("password")
        }
    }, [type, showPassword, form])

    return (
        <>
            <Label htmlFor={field?.name}>{label}</Label>
            <div className={clsx("flex relative z-0 w-full h-full pt-2 ", { "pb-0": hasError, "pb-2": !hasError })}>
                <Input className={clsx({ "!rounded-r-none": type === 'password' }, className)} type={inputType}
                    {...field}
                    {...props}
                />
                {type === "password" && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="transition-all duration-150"
                    >
                        <div className="px-1 bg-white text-black rounded-r-[10px] border border-beta border-l-0 h-full ">
                            {showPassword ? <Eye className="relative object-cover h-full" /> : <EyeOff className="relative object-cover  h-full" />}
                        </div>
                    </button>
                )}
                <Button>Change</Button>
            </div>
            <FormikErrorMessage name={field?.name} className={clsx("py-2")} />
        </>

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

export const FormikErrorMessage: React.FC<ErrorMessageProps> = ({ name, className }) => {
    return <ErrorMessage id={name} name={name} component="div" className={clsx('text-red-500 font-bold', className)} />;
}