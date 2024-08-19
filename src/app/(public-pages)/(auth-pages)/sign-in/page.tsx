import { AuthForm } from "../_components/auth-form"


export default function SingUpPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] py-10 bg-background">
            <div className="max-w-md w-full space-y-6 p-8 rounded-lg shadow-lg bg-card">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-card-foreground">
                        Sign In
                    </h1>
                    <p className="mt-2 text-muted-foreground">
                        Welcome back! Sign in to your account to access your todo list.
                    </p>
                </div>
                <AuthForm />
            </div>
        </div>
    )
}
