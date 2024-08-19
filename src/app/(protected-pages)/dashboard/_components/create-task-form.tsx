"use client"

import { useState } from "react"
import { toast } from "react-toastify"

import { addToDo } from "@/lib/functions/db"
import { useUser } from "@/lib/hooks/use-user"
import { LoadingButton } from "@/components/ui/loading-button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export function CreateTaskForm() {
    const { user } = useUser();
    const [isLoading, setLoading] = useState(false);
    const [taskInput, setTaskInput] = useState({
        title: "",
        description: "",
        priority: "",
        category: "",
    })


    const changeCategoryInput = (category: string) => {
        setTaskInput(prev => ({
            ...prev,
            category: category,
        }))
    }

    const changePriorityInput = (priority: string) => {
        setTaskInput(prev => ({
            ...prev,
            priority: priority,
        }))
    }

    const handleSubmit = async () => {
        setLoading(true);

        try {
            await addToDo({
                userId: user?.$id || "",
                ...taskInput
            })
            setTaskInput({
                category: "",
                description: "",
                priority: "",
                title: "",
            })
        } catch (err: any) {
            toast.error(err.response.message)
            return;
        } finally {
            setLoading(false);
        }
    }


    return (
        <Card>
            <CardHeader>
                <CardTitle>Create New Task</CardTitle>
            </CardHeader>
            <CardContent>
                <form
                    className="grid gap-4"
                    onSubmit={async (e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                >
                    <div className="grid gap-1">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            placeholder="Enter task title"
                            required
                            value={taskInput.title}
                            onChange={(e) => setTaskInput(prev => ({
                                ...prev,
                                title: e.target.value,
                            }))}
                        />
                    </div>
                    <div className="grid gap-1">
                        <Label htmlFor="description">
                            Description
                        </Label>
                        <Textarea
                            id="description"
                            placeholder="Enter task description"
                            rows={5}
                            required
                            value={taskInput.description}
                            onChange={(e) => setTaskInput(prev => ({
                                ...prev,
                                description: e.target.value,
                            }))}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="grid gap-1">
                            <Label
                                htmlFor="category"
                                className="text-lg font-semibold"
                            >
                                Category
                            </Label>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <p className="text-sm">
                                        Selected category:
                                    </p>
                                    {taskInput.category.length > 0 && (
                                        <Badge variant={"default"}>
                                            {taskInput.category}
                                        </Badge>
                                    )}
                                </div>
                                <p
                                    className="text-sm cursor-pointer"
                                    onClick={() => changeCategoryInput("Work")}
                                >
                                    Work
                                </p>
                                <p
                                    className="text-sm cursor-pointer"
                                    onClick={() => changeCategoryInput("Personal")}
                                >
                                    Personal
                                </p>
                                <p
                                    className="text-sm cursor-pointer"
                                    onClick={() => changeCategoryInput("Shopping")}
                                >
                                    Shopping
                                </p>
                                <p
                                    className="text-sm cursor-pointer"
                                    onClick={() => changeCategoryInput("Remainder")}
                                >
                                    Remainder
                                </p>
                            </div>
                        </div>
                        <div className="grid gap-1">
                            <Label
                                htmlFor="category"
                                className="text-lg font-semibold"
                            >
                                Priority
                            </Label>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <p className="text-sm">
                                        Selected priority:
                                    </p>
                                    {taskInput.priority.length > 0 && (
                                        <Badge variant={"default"}>
                                            {taskInput.priority}
                                        </Badge>
                                    )}
                                </div>
                                <p
                                    onClick={() => changePriorityInput("High")}
                                    className="text-sm cursor-pointer"
                                >
                                    High
                                </p>
                                <p
                                    onClick={() => changePriorityInput("Medium")}
                                    className="text-sm cursor-pointer"
                                >
                                    Medium
                                </p>
                                <p
                                    onClick={() => changePriorityInput("Low")}
                                    className="text-sm cursor-pointer"
                                >
                                    Low
                                </p>
                            </div>
                        </div>
                    </div>
                    {isLoading ? (
                        <LoadingButton />
                    ) : (
                        <Button type="submit" className="w-full">
                            Create Task
                        </Button>
                    )}
                </form>
            </CardContent>
        </Card>
    )
}
