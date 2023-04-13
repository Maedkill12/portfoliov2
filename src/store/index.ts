import { proxy } from "valtio";
import { Project } from "../config/interfaces";

const state = proxy({
  palette: {
    primary: "#FF8E05",
    text: "#FFFFFF",
    backgroundHeader: "#252F39",
    background: "#303747",
  },
  activeSection: "",
  projects: [] as Project[],
});

export default state;
