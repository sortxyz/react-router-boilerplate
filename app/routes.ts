import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("layouts/example.tsx", [
    route("about", "routes/about+test.tsx")
  ]),
] satisfies RouteConfig;
