import { createContext } from "react";

interface ITeacherContext {
  firstName: string;
  lastName: string;
  userName: string;
}

const TeacherContext = createContext<ITeacherContext>({} as ITeacherContext);

export { TeacherContext };
export type { ITeacherContext };
