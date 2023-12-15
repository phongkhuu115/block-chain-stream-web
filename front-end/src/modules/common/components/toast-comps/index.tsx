
import {
    Alert,
    AlertDescription
} from "@components/ui/alert";
import { Flip, ToastOptions, toast } from "react-toastify";

const toastOptions: ToastOptions = {
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    progress: undefined,
    theme: "light",
    transition: Flip
}

export const notifyError = (message: string) => toast.error(
    <Alert className="text-red-500 border-none" variant="destructive">
        <AlertDescription>
            {message}
        </AlertDescription>
    </Alert>, toastOptions);

export const notifySuccess = (message: string) => toast.success(
    <Alert className="text-green-500 border-none" variant="default">
        <AlertDescription>
            {message}
        </AlertDescription>
    </Alert>, toastOptions);

