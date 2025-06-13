import React from "react";

type DefaultItens = {
    children: React.ReactNode;
    className?: string;
    classItem?: string;
};

export function Fieldset({ children, classItem }: DefaultItens) {
    return (
        <fieldset
            className={`${classItem} grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full gap-6`}
        >
            {children}
        </fieldset>
    );
}
