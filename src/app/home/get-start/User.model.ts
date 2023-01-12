export class User{

fullName:string;
country:string;
province:string;
city:string;
phoneNumber:number;
email:string;
password: string;
Confirmpassword:string;

constructor(fullName:string, country:string, province:string,city:string,countryNumber:number,email:string,password:string,confirmpassword:string){
  this.fullName=fullName;
  this.country=country;
  this.province=province;
  this.city=city;
  this.phoneNumber=countryNumber;
  this.email=email;
  this.password=password;
  this.Confirmpassword=confirmpassword;
}
}
