import { redirect } from "react-router-dom";
import { deleteItem } from "../helper";
import { toast } from "react-toastify";

export default function logoutAction() {
  //delete the user
  deleteItem({ key: "userName" });

  toast.success("You've deleted your account!");
  //return redirect
  return redirect("/");
}
