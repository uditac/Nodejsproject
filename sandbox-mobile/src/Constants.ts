import { Platform } from "react-native";
import Constants from "expo-constants";
const { manifest } = Constants;

let host;
try {
  host = manifest.debuggerHost!.split(":").shift();
} catch (e) {
  host = "localhost";
}

export const baseUrl = `http://${host}:3000`;
console.log("Using baseUrl:", baseUrl);

export const Blue = "#166db1";
export const Pink = "#EC7063";
export const Black = "#000000";
