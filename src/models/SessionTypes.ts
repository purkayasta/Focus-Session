export class SessionType {
  name: string;
  limit: number;
  color: string;
  hoverColor: string;
  bgPageColor: string;

  constructor(name: string, time: number, color: string, hoverColor?: string, bgPageColor?: string) {
    this.name = name;
    this.limit = time;
    this.color = color;

    if (hoverColor)
      this.hoverColor = hoverColor;
    else
      this.hoverColor = "green";

    if (bgPageColor)
      this.bgPageColor = bgPageColor;
    else
      this.bgPageColor = "yellow";
  }

  toString(): string {
    return `Name : ${this.name}, Time Limit: ${this.limit}`;
  }
}