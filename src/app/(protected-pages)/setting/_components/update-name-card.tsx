"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

import { updateName } from "@/lib/functions/db"
import { useUser } from "@/lib/hooks/use-user"
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


export function UpdateNameCard() {
    const { user } = useUser();
    const { refresh } = useRouter();
    const [isLoading, setLoading] = useState(false);
    const [userName, setUserName] = useState("")


    const handleSubmit = async () => {
        setLoading(true);

        try {
            await updateName(userName);
            setUserName("");
            refresh();
        } finally {
            setLoading(false);
            return;
        }
    }


    return (
        <div>
            <Card className="h-full w-full flex-1">
                <CardHeader>
                    <CardTitle>Name</CardTitle>
                    <CardDescription>Update your display name.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">
                            Current Name
                        </Label>
                        <Input
                            id="name"
                            defaultValue={user?.name}
                            disabled
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="new-name">
                            New Name
                        </Label>
                        <Input
                            type="text"
                            id="new-name"
                            placeholder="Enter new name"
                            required
                            autoComplete="off"
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
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
                                Change name
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
