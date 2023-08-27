import { redirect } from "react-router-dom";
import { deleteItem } from "../helper";

export default function logoutAction() {
  //delete the user
  deleteItem({ key: "userName" });
  //return redirect
  return redirect("/");
}
