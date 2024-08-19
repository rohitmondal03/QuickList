import { Header } from "./_components/header"


export default function Layout({ children }: TLayout) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
