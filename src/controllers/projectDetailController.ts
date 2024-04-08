import { Request, Response } from "express"
import Project from "../models/Project"

const projectDetailView = async (req: Request, res: Response) => {
    const project = await Project.getById(parseInt(req.params.id))

    res.render('project', {
        project: project,
        owner: await project.getOwner()
    })
}

export {
    projectDetailView
}