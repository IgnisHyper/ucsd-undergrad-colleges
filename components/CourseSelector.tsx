import { useState } from "react";
import Button from "./Button";
import MultiselectButtonGrid from "./MultiselectButtonGrid";
import CenteredPanel from "./CenteredPanel";

type CourseSelectorProps = {
    onSubmit: (selected: Map<string, boolean>) => void;
    title: string;
    subtitle: string;
    courses: string[];
};

export default function CourseSelector({ onSubmit, title, subtitle, courses }: CourseSelectorProps) {
    const [selected, setSelected] = useState(new Map(courses.map((course) => [course, false])));

    function handleToggle(course: string) {
        setSelected((prev) => {
            const next = new Map(prev);
            next.set(course, !prev.get(course));
            return next;
        });
    }

    return(
        <CenteredPanel>
            <label className="text-base font-semibold text-gray-800">{title}</label>
            <p className="text-sm text-gray-500">{subtitle}</p>
            <MultiselectButtonGrid
                courses={courses}
                selected={selected}
                onToggle={handleToggle}
            />
            <div className="mt-4">
                <Button onClick={() => onSubmit(selected)}>Submit</Button>
            </div>
        </CenteredPanel>
    )
}
