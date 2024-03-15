import { useEffect, useState } from "react";
import "./Archive.css";

interface Class {
  name: string;
}

const Archive = () => {
  const [classes, setClasses] = useState<Class[]>([] as Class[]);

  const fetchClasses = async () => {
    const result = await fetch("http://localhost:5000/class-info", {
      credentials: "include",
      method: "GET",
    });
    const resultJson: Class[] = await result.json();

    setClasses(resultJson);
  };

  useEffect(() => {
    fetchClasses();
  }, [fetchClasses]);

  return <div>{classes.map((res) => res.name)}</div>;
};

export default Archive;
