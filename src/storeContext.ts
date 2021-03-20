import React from "react";
import {RootStoreType} from "./redux/store";

const StoreContext = React.createContext<RootStoreType | null>(null)

export default StoreContext