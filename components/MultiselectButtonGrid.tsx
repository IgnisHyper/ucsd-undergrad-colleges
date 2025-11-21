import MultiselectButton from "./MultiselectButton";

type MultiselectButtonGridProps = {
    courses: string[];
    selected: Map<string, boolean>;
    onToggle: (course: string) => void;
}

export default function MultiselectButtonGrid({courses, selected, onToggle}: MultiselectButtonGridProps) {
    return( 
        <div className="grid grid-cols-4 gap-4 mt-4">
            {[...courses].sort().map((course) => (
                <MultiselectButton 
                    key={course} 
                    onClick={() => onToggle(course)}
                    selected={selected.get(course) ? true : false}>
                        {course}
                </MultiselectButton>
            ))}
        </div>
    )
}
