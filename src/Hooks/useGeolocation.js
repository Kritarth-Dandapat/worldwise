import { useState } from "react";

export function useGeolocation(defualtPosition = null) {
    const [isLoading, setIsLoading] = useState(false);
    const [position, setPosition] = useState(defualtPosition);
    const [error, setError] = useState(null);
  
    function getPosition() {
      if (!navigator.geolocation)
        return setError("Your browser does not support geolocation");
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          });
          setIsLoading(false);
          console.log(position)
        },
        (error) => {
          setError(error.message);
          setIsLoading(false);
        }
      );
      return position
    }
  
    return { isLoading, position, error, getPosition };
  }
  
  