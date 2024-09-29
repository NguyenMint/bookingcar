import { useEffect, useState } from "react";
import * as Location from "expo-location";

const LocationPermission = () => {
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }
    })();
  }, []);
  return null;
};

export default LocationPermission;
