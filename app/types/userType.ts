import { defaultEmail } from "./defaults/email.types"

declare namespace UserType {
    export interface userCreateFields {
        email : defaultEmail,
        password: string
    }

    export interface loginFields {
        email: defaultEmail,
        password : string
    }
}
export default UserType

