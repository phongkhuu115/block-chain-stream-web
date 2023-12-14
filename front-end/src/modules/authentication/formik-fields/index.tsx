import { Input } from "@modules/common/components/ui/input";
import { Checkbox } from "@radix-ui/react-checkbox";

export const FormikInput: React.FC<FieldProps> = ({ field, form, ...props }) => {
    return <Input {...field} {...props} />;
}

export const FormikCheckBox: React.FC<FieldProps> = ({ field, form, ...props }) => {
    return <Checkbox {...field} {...props} />;
}