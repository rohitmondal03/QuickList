"use client"

import { useState } from "react"

import { useUser } from "@/lib/hooks/use-user"
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


export default function SettingPage() {
    const { user } = useUser();
    const []= useState({
        name: "",
        email: "",
        password: "",
    })


    return (
        <div className="w-full max-w-3xl mx-auto py-12 px-4 md:px-6">
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
                    <Card>
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
                                    id="new-name"
                                    placeholder="Enter new name"
                                    required
                                />
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Email</CardTitle>
                            <CardDescription>Update your email address.</CardDescription>
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
                                <Label htmlFor="new-email">New Email</Label>
                                <Input id="new-email" type="email" placeholder="Enter new email" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="col-span-2">
                        <CardHeader>
                            <CardTitle>Password</CardTitle>
                            <CardDescription>Update your password.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="password">
                                    Current Password
                                </Label>
                                <Input
                                    id="password"
                                    type="password"
                                    defaultValue="********"
                                    disabled />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="new-password">
                                    New Password
                                </Label>
                                <Input
                                    id="new-password"
                                    type="password"
                                    placeholder="Enter new password"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex justify-end">
                    <Button>Save Changes</Button>
                </div>
            </div>
        </div>
    )
}