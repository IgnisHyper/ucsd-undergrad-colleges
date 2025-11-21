'use client'
import CourseSelector from "@/components/CourseSelector";
import Question from "@/components/Question";
import { useState } from "react";
import { APCourses, IBCourses } from "@/components/Courses"
import ScoreEntry from "@/components/ScoreEntry";

type displayedPanel = "apquestion" | "ibquestion" | "apselector" | "ibselector" | "apscores" | "ibscores" | "welcome" | "overview"

export default function UniveristyRequirements(){
    const [panel, setPanel] = useState<displayedPanel>("apquestion");
    const [apcourses, setAPCourses] = useState<string[]>([]);
    const [ibcourses, setIBCourses] = useState<string[]>([]);

    function APSubmission(selectedCourses: Map<string, boolean>){
        const selected = Array.from(selectedCourses.entries())
            .filter(([, isSelected]) => isSelected)
            .map(([key]) => key);
        setAPCourses(selected);
        setPanel("apscores");
    }

    function IBSubmission(selectedCourses: Map<string, boolean>){
        const selected = Array.from(selectedCourses.entries())
            .filter(([, isSelected]) => isSelected)
            .map(([key]) => key);

        setIBCourses(selected);
        setPanel("ibscores");
    }

    if(panel === "welcome"){
        <h1>welcome placeholder</h1>
    }

    if (panel === "apquestion"){
        return(
            <Question question="Have you taken any Advanced Placement (AP) classes?"
                    subtext='Select "Yes" even if you are taking courses in progress.'
                    yesClick={() => setPanel("apselector")}
                    noClick={() => setPanel("ibquestion")}>
            </Question>
        )
    }
    if (panel === "apselector"){
        return (
            <CourseSelector onSubmit={APSubmission} 
                            title='Advanced Placement Courses'
                            subtitle='Select courses you have taken or are currently taking.'
                            courses={APCourses}></CourseSelector>
        )
    }
    if (panel === "apscores"){
        return (
            <ScoreEntry courses={apcourses}
                        onSubmit={() => setPanel("ibquestion")}></ScoreEntry>
        )
    }
    if (panel === "ibquestion"){
        return (
            <Question question="Have you taken any International Baccalaureate (IB) classes?"
                    subtext='Select "Yes" even if you are taking courses in progress.'
                    yesClick={() => setPanel("ibselector")}
                    noClick={() => setPanel("overview")}>
            </Question>
        )
    }
    if(panel === "ibselector"){
        return (
            <CourseSelector onSubmit={IBSubmission} 
                            title='International Baccalaureate Courses'
                            subtitle='Select courses you have taken or are currently taking.'
                            courses={IBCourses}></CourseSelector>
        )
    }
    if (panel === "ibscores"){
        return (
            <h1>ib scores placehlder</h1>
        )
    }
    if (panel === "overview"){
        return (
            <h1>overview placeholder</h1>
        )
    }
}
