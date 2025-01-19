export class CreateCourseDto {
    name: string;
    description: string;
    price: number;
    duration: number;
    rating: number;
    creator: string;
    views: number;
    lessons: string[];
    category: string;
    difficulty: string;
    
    students?: string[];
    reviews?: string[];
    language?: string;
    resources?: string[];
    quizzes?: string[];
    assignments?: string[];
    questions?: string[];
    answers?: string[];
    comments?: string[];
    likes?: number;
    dislikes?: number;
}
