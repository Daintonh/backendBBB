export class BookingSignUpModel {
    constructor(
        public email: string,
        public password: string,
        public phoneNumber?: string
    ){

    }
}
