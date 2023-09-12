"use client"
import React, { PropsWithChildren, ReactNode, createContext, useContext, useState } from "react";


type AlertOptions = {
    title: ReactNode;
    confirmMessage: ReactNode;
    onConfirm(): Promise<void> | void;
};

type ContextType = {
    showAlert(opts: AlertOptions): void
}

const AlertContext = createContext<ContextType| null>(null)


export type AlertComponentProps = {
    open: boolean;
    message: ReactNode;
    title: ReactNode;
    onClose(): void;
    onConfirm(): Promise<void> | void;
    confirming?: boolean
}

export type AlertProviderProps = {
    AlertComponent: React.ComponentType<AlertComponentProps> 
} & PropsWithChildren

const AlertProvider = ({ AlertComponent, children }: AlertProviderProps) => {
    const [shown, setShown] = useState(false)
    const [loading, setLoading] = useState(false)
    const defaultOptions: AlertOptions = {
        title: "Confirm",
        confirmMessage: "Are you sure?",
        async onConfirm() {
            setShown(false)
        }
    }

    const [alertOptions, setAlertOptions] = useState<AlertOptions>(defaultOptions)

    const showAlert = (opts?: Partial<AlertOptions>) => {
        setShown(true)
        setAlertOptions({
            confirmMessage: opts?.confirmMessage ?? defaultOptions.confirmMessage,
            onConfirm: opts?.onConfirm ?? defaultOptions.onConfirm,
            title: opts?.title ?? defaultOptions.title
        })
    }

    const hideAlert = () => setShown(false)
    const onConfirm = async () => {
        setLoading(true)
        alertOptions.onConfirm && (await alertOptions.onConfirm())
        setLoading(false)
        setShown(false)
    }

    return (
        <AlertContext.Provider value={{ showAlert }} >
            <AlertComponent 
                open={shown}
                onClose={hideAlert}
                onConfirm={onConfirm}
                message={alertOptions.confirmMessage}
                title={alertOptions.title}
                confirming={loading}
            />
            {children}
        </AlertContext.Provider>
    )
}

export default AlertProvider

export const useConfirmAlert = () => {
    const context = useContext(AlertContext)
    if (!context) {
        throw new Error("Please use AlertProvider in parent component")
    }

    return context
}
