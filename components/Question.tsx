'use client'

import { MouseEventHandler } from "react";
import Button from "./Button";
import Panel from "./Panel";
import CenteredPanel from "./CenteredPanel";

export default function Question({ question, subtext, yesClick, noClick }: {question: string, subtext: string, yesClick: MouseEventHandler<HTMLButtonElement>, noClick: MouseEventHandler<HTMLButtonElement>}){
    return (
        <CenteredPanel>
            <label>
                {question}
            </label>
            <p>
                {subtext}
            </p>
            <div className="mt-4 flex gap-4 justify-center items-center">
                <Button onClick={yesClick}>Yes</Button>
                <Button onClick={noClick}>No</Button>
            </div>
        </CenteredPanel>
    )
}
