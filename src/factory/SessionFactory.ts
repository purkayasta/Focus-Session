import { SessionType } from "../models/SessionTypes";

export class SessionFactory {

  officeSession = new SessionType("Office", 45, "purple");
  personalSession = new SessionType("Personal", 15, "red");
  pomodoroSession = new SessionType("Pomodoro", 25, "blue");
  testSession = new SessionType("Stupid", 1, "yellow");

  totalRules(): SessionType[] {
    return [this.officeSession, this.personalSession, this.pomodoroSession, this.testSession];
  }
}