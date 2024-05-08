import { lazy } from "solid-js";

const User = lazy(() => import("./user"));
const Login = lazy(() => import("./login"));
const NotFound = lazy(() => import("./notFound"));

export {User, Login, NotFound };
