import {createContext} from "react";
import data from "../../../pages/data.json";

export const BaseContext = createContext(null);
export const InitDataContext = createContext(data);
export const RouterContext = createContext(null);
export const LoginContext = createContext(null);
export const TranslatorContext = createContext(null);