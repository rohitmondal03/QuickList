import { MoveVerticalIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu"


export function TasksCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Tasks</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="flex items-center justify-between rounded-md bg-muted/40 px-4 py-3">
                        <div className="flex items-center gap-3">
                            <Checkbox />
                            <div>
                                <div className="font-medium">
                                    Finish weekly report
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Complete the weekly sales report by Friday.
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge
                                variant="outline"
                                className="bg-yellow-500/20 text-yellow-500"
                            >
                                Medium
                            </Badge>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                    >
                                        <MoveVerticalIcon className="h-4 w-4" />
                                        <span className="sr-only">
                                            Task options
                                        </span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                    <DropdownMenuItem>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    <div className="flex items-center justify-between rounded-md bg-muted/40 px-4 py-3">
                        <div className="flex items-center gap-3">
                            <Checkbox defaultChecked />
                            <div>
                                <div className="font-medium line-through">
                                    Buy groceries
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Pick up milk, eggs, and bread from the store.
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge
                                variant="outline"
                                className="bg-green-500/20 text-green-500"
                            >
                                Low
                            </Badge>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <MoveVerticalIcon className="h-4 w-4" />
                                        <span className="sr-only">Task options</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                    <DropdownMenuItem>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    <div className="flex items-center justify-between rounded-md bg-muted/40 px-4 py-3">
                        <div className="flex items-center gap-3">
                            <Checkbox />
                            <div>
                                <div className="font-medium">
                                    Prepare for client meeting
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Review the presentation and gather necessary materials.
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge
                                variant="outline"
                                className="bg-red-500/20 text-red-500"
                            >
                                High
                            </Badge>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                    >
                                        <MoveVerticalIcon className="h-4 w-4" />
                                        <span className="sr-only">Task options</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                    <DropdownMenuItem>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>

    )
}
