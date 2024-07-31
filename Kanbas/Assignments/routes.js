import db from "../Database/index.js";
export default function AssignmentRoutes(app) {
    app.put("/api/assignments/:aid", (req, res) => {

        const { aid } = req.params;
        const assessmentIndex = db.assignments.findIndex(
          (a) => a._id === aid);
        db.assignments[assessmentIndex] = {
          ...db.assignments[assessmentIndex],
          ...req.body
        };
        res.sendStatus(204);
      });

    app.post("/api/courses/:cid/assignments", (req, res) => {
        console.log("inside ne wassignment");
        const { cid } = req.params;

        const newAssignment = {
          ...req.body,
          course: cid,
          _id: new Date().getTime().toString(),
        };
        db.assignments.push(newAssignment);
        res.send(newAssignment);
      });

      app.delete("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        db.assignments = db.assignments.filter((a) => a._id !== aid);
        res.sendStatus(200);
      });
  app.get("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const assignments = db.assignments.filter((m) => m.course === cid);
    res.json(assignments);
  });
}