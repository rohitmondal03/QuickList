"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

import { updatePassword } from "@/lib/functions/db"
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


export function UpdatePasswordCard() {
    const { refresh } = useRouter();
    const [isLoading, setLoading] = useState(false);
    const [userInputs, setUserInputs] = useState({
        oldPassword: "",
        newPassword: "",
    })


    const handleSubmit = async () => {
        setLoading(true);

        try {
            await updatePassword(userInputs);
            setUserInputs({
                newPassword: "",
                oldPassword: "",
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
                    <CardTitle>Password</CardTitle>
                    <CardDescription>Update your Password.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="old-password">
                            Old Password
                        </Label>
                        <Input
                            id="old-password"
                            type="password"
                            placeholder="Enter your Old password"
                            required
                            value={userInputs.oldPassword}
                            onChange={e => setUserInputs(prev => ({
                                ...prev,
                                oldPassword: e.target.value,
                            }))}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">
                            New Password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            required
                            value={userInputs.newPassword}
                            onChange={e => setUserInputs(prev => ({
                                ...prev,
                                newPassword: e.target.value,
                            }))}
                        />
                    </div>
                    <div className="flex justify-end">
                        {isLoading ? (
                            <LoadingButton />
                        ) : (
                            <Button
                                size={"sm"}
                                onClick={handleSubmit}
                            >
                                Change password
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
