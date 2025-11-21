export type Dept = "MATH" | "CSE" | "PHYS" | "CHEM" | "BILD";

export type CourseCode = `${Dept} ${string}`;

export interface Course {
    id: CourseCode;
    dept: Dept;
    number: string;
}