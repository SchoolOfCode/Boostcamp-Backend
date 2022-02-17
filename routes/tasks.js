import express from "express";
import {
   getShortTasks,
   getMediumTasks,
   getLongTasks,
   getOnscreenShortTasks,
   getOnscreenMediumTasks,
   getOnscreenLongTasks,
   getOffscreenShortTasks,
   getOffscreenMediumTasks,
   getOffscreenLongTasks,
} from "../models/tasks.js";

const router = express.Router();

// routes for fetching all tasks
router.get("/short", async function (req, res, next) {
   const shortTasks = await getShortTasks();

   res.json({
      success: true,
      payload: shortTasks,
   });
});

router.get("/medium", async function (req, res, next) {
   const mediumTasks = await getMediumTasks();

   res.json({
      success: true,
      payload: mediumTasks,
   });
});

router.get("/long", async function (req, res, next) {
   const longTasks = await getLongTasks();

   res.json({
      success: true,
      payload: longTasks,
   });
});

// routes for fetching onscreen tasks
router.get("/onscreen/short", async function (req, res, next) {
   const onscreenShortTasks = await getOnscreenShortTasks();

   res.json({
      success: true,
      payload: onscreenShortTasks,
   });
});

router.get("/onscreen/medium", async function (req, res, next) {
   const onscreenMediumTasks = await getOnscreenMediumTasks();

   res.json({
      success: true,
      payload: onscreenMediumTasks,
   });
});

router.get("/onscreen/long", async function (req, res, next) {
   const onscreenLongTasks = await getOnscreenLongTasks();

   res.json({
      success: true,
      payload: onscreenLongTasks,
   });
});

// routes for fetching offscreen tasks
router.get("/offscreen/short", async function (req, res, next) {
   const offscreenShortTasks = await getOffscreenShortTasks();

   res.json({
      success: true,
      payload: offscreenShortTasks,
   });
});

router.get("/offscreen/medium", async function (req, res, next) {
   const offscreenMediumTasks = await getOffscreenMediumTasks();

   res.json({
      success: true,
      payload: offscreenMediumTasks,
   });
});

router.get("/offscreen/long", async function (req, res, next) {
   const offscreenLongTasks = await getOffscreenLongTasks();

   res.json({
      success: true,
      payload: offscreenLongTasks,
   });
});

export default router;
