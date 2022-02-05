export class Quote {
  showDescription:boolean;
  constructor(public topic:string,public name:string,public description:string){
    this.showDescription = false;
  }
 

}
