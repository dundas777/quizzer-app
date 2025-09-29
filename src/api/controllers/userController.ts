import { userData } from '../data/users';
import { User } from '../../domain/types/user';

export class UserController {

    public getUser(email: string, password: string): User[] {
        return userData.filter(q => q.email === email && q.password === password);
    }

    public addUser(user: User): void {
        userData.push(user);
    }

    public getUsers(): User[] {
        return userData;
    }
};
