'use client'
import CourseSelector from "@/components/CourseSelector";
import Question from "@/components/Question";
import { useState } from "react";
import { APCourses, IBCourses } from "@/components/Courses"
import ScoreEntry from "@/components/ScoreEntry";


export default function UniveristyRequirements(){
    const [panel, setPanel] = useState(0);
    const [apcourses, setAPCourses] = useState<string[]>([]);
    const [ibcourses, setIBCourses] = useState<string[]>([]);

    function APSubmission(selectedCourses: Map<string, boolean>){
        const selected = Array.from(selectedCourses.entries())
            .filter(([, isSelected]) => isSelected)
            .map(([key]) => key);
        setAPCourses(selected);
        setPanel(2);
    }

    function IBSubmission(selectedCourses: Map<string, boolean>){
        const selected = Array.from(selectedCourses.entries())
            .filter(([, isSelected]) => isSelected)
            .map(([key]) => key);

        setIBCourses(selected);
        setPanel(4);
    }

    if (panel === 0){
        return(
            <Question question="Have you taken any Advanced Placement (AP) classes?"
                    subtext='Select "Yes" even if you are taking courses in progress.'
                    yesClick={() => setPanel(1)}
                    noClick={() => setPanel(3)}>
            </Question>
        )
    }
    if (panel === 1){
        return (
            <CourseSelector onSubmit={APSubmission} 
                            title='Advanced Placement Courses'
                            subtitle='Select courses you have taken or are currently taking.'
                            courses={APCourses}></CourseSelector>
        )
    }
    if (panel === 2){
        return (
            <ScoreEntry courses={apcourses}
                        onSubmit={() => setPanel(3)}></ScoreEntry>
        )
    }
    if (panel === 3){
        return (
            <Question question="Have you taken any International Baccalaureate (IB) classes?"
                    subtext='Select "Yes" even if you are taking courses in progress.'
                    yesClick={() => setPanel(4)}
                    noClick={() => setPanel(5)}>
            </Question>
        )
    }
    if(panel === 4){
        return (
            <CourseSelector onSubmit={IBSubmission} 
                            title='International Baccalaureate Courses'
                            subtitle='Select courses you have taken or are currently taking.'
                            courses={IBCourses}></CourseSelector>
        )
    }
    if (panel === 5){
        return (
            <h1>Overview Placeholder</h1>
        )
    }
}
