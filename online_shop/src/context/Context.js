import React from "react";
import Store from "../store/store";

const store = new Store();

export const Context = React.createContext({ store });
