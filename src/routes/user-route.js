import { Router } from "express";
import {
  store,
  index,
  show,
  update,
  destroy,
  signup,
  login,
} from "../controllers/user-controller.js";

import check_token from "../middlewares/check_token.js";
import check_role from "../middlewares/check_role.js"

const router = Router();

router.post("/", check_token, check_role(["ADM"]), store); 
router.get("/", check_token, check_role(["USU"]), index); 
router.get("/:id", check_token, show);
router.put("/:id", check_token, update);
router.delete("/:id", check_token, destroy);

router.post("/signup", signup);
router.post("/login", login);

export default router;
