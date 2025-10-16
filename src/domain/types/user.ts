export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    dateOfBirth: Date;
    country: string;
    isAdmin: boolean;
    failedLogins: number;
}
