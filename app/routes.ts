import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("image/:imageId", "routes/image.tsx"),
  route("guess/:type", "routes/guess.tsx"),
] satisfies RouteConfig;
