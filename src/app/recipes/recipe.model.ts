export class Recipe {
  constructor(public name: string, public description: string, public imageUrl: string) { }

//ALTERNATIVE WAY TO DEFINE MODEL (verbose):
  // public name: string;
  // public description: string;
  // public imageUrl: string;

  // constructor(name: string, description: string, imageUrl: string) {
  //   this.name = name;
  //   this.description = description;
  //   this.imageUrl = imageUrl;
  // }
}
