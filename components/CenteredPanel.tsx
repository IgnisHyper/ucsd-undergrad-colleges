import { ReactNode } from "react";
import Panel from "./Panel";

export default function CenteredPanel({children}: {children: ReactNode}){
    return(
        <div className="fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <Panel>
                {children}
            </Panel>
        </div>
    )
}