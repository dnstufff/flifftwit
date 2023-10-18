import IUser from "./IUser";

export default interface IAuthContext {
    user: IUser | null;
    signOut: Function | undefined;
    login: Function | undefined;
}
