import { Request, Response } from "express"
import Project from "../models/Project"

const dashboardView = async (req: Request, res: Response) => {
    const projects = await Project.findAll()

    res.render('index', {
        projects: projects
    })
}

export {
    dashboardView
}