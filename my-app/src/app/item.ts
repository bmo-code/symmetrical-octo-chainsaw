export class Item {
  name: string;
  reference: number;
  state: string;
  constructor(data: any) {
    this.name = data.name;
    this.reference = data.reference;
    this.state = data.state;
  }
}
