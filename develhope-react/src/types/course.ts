export class Course {

    label: string
    videosNumber: number
    completedExercises: number
    maxExercises: number
    start: string

    constructor(label: string, videosNumber: number, completedExercises: number, maxExercises: number, start: string) {
        this.label = label;
        this.videosNumber = videosNumber;
        this.completedExercises = completedExercises;
        this.maxExercises = maxExercises;
        this.start = start;
    }

    completedPercentage(): number {
        return Math.round((this.completedExercises / this.maxExercises) * 100)
    }
}

