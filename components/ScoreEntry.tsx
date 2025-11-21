import { FormEvent, useState } from "react";
import Panel from "@/components/Panel";
import Button from "./Button";
import CenteredPanel from "./CenteredPanel";

type ScoreEntryProps = {
    courses: string[];
    onSubmit: (scores: Map<string, number>) => void;
};

export default function ScoreEntry({ courses, onSubmit }: ScoreEntryProps){
    const [scores, setScores] = useState<Map<string, string>>(
        () => new Map(courses.map((course) => [course, ""]))
    );

    function handleChange(course: string, value: string) {
        setScores((prev) => {
            const next = new Map(prev);
            next.set(course, value);
            return next;
        });
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const selected = new Map<string, number>();

        scores.forEach((value, key) => {
            if (value === "") return;
            const parsed = Number(value);
            if (!Number.isNaN(parsed)) {
                selected.set(key, parsed);
            }
        });

        onSubmit(selected);
    }

    return (
        <CenteredPanel>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <label>Advanced Placement Scores</label>
                <p>If you are taking a course and have not yet recieved a score for it, leave the score blank.</p>
                <div className="grid grid-cols-1 gap-4">
                    {[...courses].sort().map((course) => (
                        <label
                            key={course}
                            className="flex items-center justify-between gap-3 border border-gray-200 rounded-lg px-3 py-2"
                        >
                            <span className="text-sm font-medium text-gray-800">{course}</span>
                            <input
                                type="number"
                                inputMode="numeric"
                                min={0}
                                className="w-24 border border-gray-300 rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
                                value={scores.get(course) ?? ""}
                                onChange={(e) => handleChange(course, e.target.value)}
                                placeholder="Score"
                            />
                        </label>
                    ))}
                </div>
                <div>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </CenteredPanel>
    );
}
