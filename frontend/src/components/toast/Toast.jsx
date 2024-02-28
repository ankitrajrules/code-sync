import { Toaster } from "react-hot-toast"

function Toast() {
    return (
        <Toaster
            position="top-right"
            toastOptions={{
                success: {
                    theme: {
                        primary: "#5b6dff",
                    },
                },
            }}
        />
    )
}

export default Toast
