import { SessionType } from "../models/SessionTypes";

export class SessionFactory {

  officeSession = new SessionType("Office Session", 45, "purple");
  personalSession = new SessionType("Personal Session", 15, "red");
  pomodoroSession = new SessionType("Pomodoro Session", 25, "blue");

  totalRules(): SessionType[] {
    return [this.officeSession, this.personalSession, this.pomodoroSession];
  }
}