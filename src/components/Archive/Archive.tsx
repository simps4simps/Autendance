import { useState } from "react";
import "./Archive.css";
import { apiURL } from "../Utils";

interface Class {
  name: string;
}

const Archive = () => {
  const [classes, setClasses] = useState<Class[]>([] as Class[]);

  const fetchClasses = async () => {
    const result = await fetch(`${apiURL}/class-info`, {
      credentials: "include",
      method: "GET",
    });
    const resultJson: Class[] = await result.json();

    return resultJson;
  };

  fetchClasses().then((data) => setClasses(data));

  return (
    <div>
      {classes.length != 0 ? (
        classes.map((res) => res.name)
      ) : (
        <h1 id="loading-text">Loading</h1>
      )}
    </div>
  );
};

export default Archive;
