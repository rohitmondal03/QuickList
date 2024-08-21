import { Header } from "./_components/header"
import { UserToDoProvider } from "../../provider/user-todo-provider"


export default function Layout({ children }: TLayout) {
    return (
        <UserToDoProvider>
            <Header />
            {children}
        </UserToDoProvider>
    )
}
