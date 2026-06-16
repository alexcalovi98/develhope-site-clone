type HelloWorldProps = {
    name: string;
    surname: string;
    course?: string;
    age?: number;
}

export function HelloWorld({ name, surname, course = "Web Development", age }: HelloWorldProps) {
    return (
        <>
        <h1>Hello World {name} {surname} from course {course}</h1>
        {age && <span>The age is {age}</span>}
        </>
    )
}