const teamRouter = require("express").Router();

const { addTeam } = require("../function/team/add.js");
const { getTeams } = require("../function/team/list.js");
const { getTeamById } = require("../function/team/id.js");
const { deleteTeam } = require("../function/team/delete.js");
const { editTeam } = require("../function/team/edit.js");

teamRouter.get("/", getTeams);                     // ყველა წევრი
teamRouter.get("/:id", getTeamById);        // კონკრეტული წევრი
teamRouter.post("/", addTeam);              // დამატება
teamRouter.put("/:id", editTeam);           // რედაქტირება
teamRouter.delete("/:id", deleteTeam);      // წაშლა

module.exports = teamRouter;
