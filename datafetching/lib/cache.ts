import { cache } from "react";
import { getUser, getPost } from "./api";

export const getCachedUser = cache(getUser);
export const getCachedPosts = cache(getPost);
