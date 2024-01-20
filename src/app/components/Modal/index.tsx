import { ReactNode } from "react";

interface ModalProps {
    children: ReactNode;
}

export function Modal({children}: ModalProps) {
    return (
        <div className="bg-overlay h-screen w-full fixed top-0 left-0 right-0 z-20">
            <div className="bg-white rounded-lg p-6 absolute top-[50%] left-[50%] modalTransform lg:w-[700px] sm: w-full">
                {children}
            </div>
        </div>
    )
}