import { Header } from "./_components/header";


export default function RootLayout({ children, }: TLayout) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
