import { ReactNode } from "react";
import { cn } from "./utils";

type TContainer = {
    children : ReactNode,
    classname ?: String
}

const Container = ({children,classname}:TContainer) => {
    return (
        <div className={cn("w-full max-w-[1260px] px-5 mx-auto",classname)}>
            {children}
        </div>
    );
};

export default Container;