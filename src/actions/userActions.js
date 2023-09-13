import { getUserAPI } from "../services/userService";

export const getUser = () => dispatch => dispatch(getUserAPI());
