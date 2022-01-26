import { Landing } from "../shared/landing";

interface ITopBarRoutes {
  route: string;
  name: string;
  color: string;
  component: React.ReactNode;
}

export const topBarRoutes: ITopBarRoutes[] = [
  {
    route: "/",
    name: "sports",
    color: "#00a826",
    component: <Landing />
  },
  {
    route: "/live-and-real",
    name: "live & real",
    color: "orange",
    component: <Landing />
  },
  {
    route: "/casino",
    name: "casino",
    color: "blue",
    component: <Landing />
  },
  {
    route: "/esports",
    name: "esports",
    color: "pink",
    component: <Landing />
  },
  {
    route: "/vegas",
    name: "vegas",
    color: "red",
    component: <Landing />
  }
];
