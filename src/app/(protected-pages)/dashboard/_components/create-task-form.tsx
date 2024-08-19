"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card"


export function CreateTaskForm() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Create New Task</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="grid gap-4">
                    <div className="grid gap-1">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" placeholder="Enter task title" />
                    </div>
                    <div className="grid gap-1">
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" placeholder="Enter task description" rows={3} />
                    </div>
                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="grid gap-1">
                            <Label
                                htmlFor="category"
                                className="text-lg font-semibold"
                            >
                                Category
                            </Label>
                            <Select>
                                <option value="" className="text-sm">Select a category</option>
                                <option value="work">Work</option>
                                <option value="personal">Personal</option>
                                <option value="shopping">Shopping</option>
                                <option value="reminders">Reminders</option>
                            </Select>
                        </div>
                        <div className="grid gap-1">
                            <Label
                                htmlFor="category"
                                className="text-lg font-semibold"
                            >
                                Priority
                            </Label>
                            <Select>
                                <option value="" className="text-sm">Select a priority</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </Select>
                        </div>
                    </div>
                    <Button type="submit" className="w-full">
                        Create Task
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
