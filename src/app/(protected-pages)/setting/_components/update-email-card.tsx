"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

import { updateEmail } from "@/lib/functions/db"
import { useUser } from "@/hooks/use-user"
import { LoadingButton } from "@/components/ui/loading-button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent
} from "@/components/ui/card"


export function UpdateEmailCard() {
    const { user } = useUser();
    const { refresh } = useRouter();
    const [isLoading, setLoading] = useState(false);
    const [userInputs, setUserInputs] = useState({
        newEmail: "",
        password: "",
    })


    const handleSubmit = async () => {
        setLoading(true);

        try {
            await updateEmail({
                email: userInputs.newEmail,
                passsword: userInputs.password,
            });
            setUserInputs({
                newEmail: "",
                password: "",
            });
            refresh();
        } finally {
            setLoading(false);
            return;
        }
    }


    return (
        <div>
            <Card className="h-full w-full">
                <CardHeader>
                    <CardTitle>E-Mail</CardTitle>
                    <CardDescription>Update your E-Mail.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">
                            Current Email
                        </Label>
                        <Input
                            id="email"
                            defaultValue={user?.email}
                            disabled
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="new-email">
                            New Email
                        </Label>
                        <Input
                            id="new-email"
                            type="email"
                            placeholder="Enter new E-Mail"
                            required
                            autoComplete="off"
                            value={userInputs.newEmail}
                            onChange={e => setUserInputs(prev => ({
                                ...prev,
                                newEmail: e.target.value,
                            }))}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">
                            Password
                        </Label>
                        <Input
                            id="password"
                            placeholder="Enter your password"
                            required
                            type="password"
                            value={userInputs.password}
                            onChange={e => setUserInputs(prev => ({
                                ...prev,
                                password: e.target.value,
                            }))}
                        />
                    </div>
                    <div className="">
                        {isLoading ? (
                            <LoadingButton />
                        ) : (
                            <Button
                                size={"sm"}
                                onClick={handleSubmit}
                            >
                                Change E-Mail
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
