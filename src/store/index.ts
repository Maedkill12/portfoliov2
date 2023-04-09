import { proxy } from "valtio";

const state = proxy({
  palette: {
    primary: "#FF8E05",
    text: "#FFFFFF",
    backgroundHeader: "#252F39",
    background: "#303747",
  },
  activeSection: "",
});

export default state;
