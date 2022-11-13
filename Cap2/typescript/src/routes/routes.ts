import { Response, Request } from "express"
import CreateCourseService from "../controller/CreateCourseService"

export function createCourse(req: Request, res: Response){
    CreateCourseService.execute({
        name: 'nodejs', 
        educator: 'Silas',
        duration: 10
    });

    
 return res.send()
}