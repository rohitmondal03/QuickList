import { UpdateNameCard } from "./_components/update-name-card"
import { UpdateEmailCard } from "./_components/update-email-card"
import { UpdatePasswordCard } from "./_components/update-password-card"


export default function SettingPage() {
    return (
        <div className="w-full max-w-5xl mx-auto py-12 px-4 md:px-6">
            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-bold">
                        Settings
                    </h1>
                    <p className="text-muted-foreground">
                        Update your personal details.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-6 ">
                    <div className="h-full w-full">
                        <UpdatePasswordCard />
                    </div>
                    <div className="h-full w-full flex-1">
                        <UpdateNameCard />
                    </div>
                    <div className="col-span-2 h-full w-full">
                        <UpdateEmailCard />
                    </div>
                </div>
            </div>
        </div>
    )
}