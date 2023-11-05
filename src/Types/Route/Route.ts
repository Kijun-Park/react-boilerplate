import React from "react";

export interface RouteType {
  path: string;
  component: () => JSX.Element;
}
