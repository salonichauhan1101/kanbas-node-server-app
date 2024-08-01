import * as dao from "./dao.js";
import mongoose from 'mongoose';

export default function ModuleRoutes(app) {
 const createModule = async (req, res) => {
    const { cid } = req.params;
    console.log(req.body)
    const module = await dao.createModule(cid, req.body);

    res.json(module);
  }

  const deleteModule = async (req, res) => {
    try {
      const { mid } = req.params;
      console.log(`Deleting module with ID: ${mid}`);
      const status = await dao.deleteModule(mid);
      res.json(status);
    } catch (error) {
      console.error(`Error deleting module: ${error.message}`);
      res.status(500).json({ error: error.message });
    }
  };

  const findAllModulesForCourse = async (req, res) => {
    try {
      const { cid } = req.params;
      console.log(`Finding modules for course ID: ${cid}`);
      const modules = await dao.findAllModulesbyCourseId(cid);
      res.json(modules);
    } catch (error) {
      console.error(`Error finding modules: ${error.message}`);
      res.status(500).json({ error: error.message });
    }
  };

  const findModuleById = async (req, res) => {
    try {
      const { mid } = req.params;
      console.log(`Finding module with ID: ${mid}`);
      const module = await dao.findModuleById(mid);
      if (module) {
        res.json(module);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      console.error(`Error finding module: ${error.message}`);
      res.status(500).json({ error: error.message });
    }
  };

   const updateModule = async (req, res) => {
    const { moduleId } = req.params;
    const status = await dao.updateModule(moduleId, req.body);
    res.json(status);
  }


  app.post("/api/courses/:cid/modules", createModule);
  app.get("/api/courses/:cid/modules", findAllModulesForCourse);
  app.get("/api/modules/:mid", findModuleById);
  app.put("/api/modules/:mid", updateModule);
  app.delete("/api/modules/:mid", deleteModule);
}

/*import db from "../Database/index.js";
export default function ModuleRoutes(app) {
app.post("/api/courses/:cid/modules", (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    db.modules.push(newModule);
    res.send(newModule);
  });
app.delete("/api/modules/:mid", (req, res) => {
    const { mid } = req.params;
    db.modules = db.modules.filter((m) => m._id !== mid);
    res.sendStatus(200);
  });
app.put("/api/modules/:mid", (req, res) => {
    const { mid } = req.params;
    const moduleIndex = db.modules.findIndex(
      (m) => m._id === mid);
    db.modules[moduleIndex] = {
      ...db.modules[moduleIndex],
      ...req.body
    };
    res.sendStatus(204);
  });

  app.get("/api/courses/:cid/modules", (req, res) => {
    const { cid } = req.params;
    const modules = db.modules.filter((m) => m.course === cid);
    res.json(modules);
  });
}*/