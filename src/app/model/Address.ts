export class Address{

    housenumber:string;
    street:string;
    city:string;
    state:string;
    pincode:string;

    constructor(  housenumber:string,
        street:string,
        city:string,
        state:string,
        pincode:string){

            this.housenumber=housenumber;
            this.street=street;
            this.city=city;
            this.state=state;
            this.pincode=pincode;
        }
}