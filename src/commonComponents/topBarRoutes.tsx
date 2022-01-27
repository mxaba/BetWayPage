interface ITopBarRoutes {
  route: string;
  name: string;
  color: string;
}

export const topBarRoutes: ITopBarRoutes[] = [
  {
    route: "/",
    name: "sports",
    color: "#00a826",
  },
  {
    route: "/live-and-real",
    name: "live & real",
    color: "orange",
  },
  {
    route: "/casino",
    name: "casino",
    color: "blue",
  },
  {
    route: "/esports",
    name: "esports",
    color: "pink",
  },
  {
    route: "/vegas",
    name: "vegas",
    color: "red",
  }
];
