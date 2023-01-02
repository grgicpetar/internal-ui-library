import React from "react";

export type ButtonProps = {
    label: string;
};

function Button({ label }: ButtonProps) {
    return <button className="bg-orange-900 text-blue-600">{label}</button>;
}

export default Button;
