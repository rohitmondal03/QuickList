import { useContext } from "react"

import { UserContext } from "@/components/provider/auth-provider"


const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error("Enter a provider")
    }

    return context
}


export {
    useUser
}