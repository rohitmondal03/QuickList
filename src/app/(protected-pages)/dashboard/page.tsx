import Link from "next/link"
import {
    AlarmClockIcon,
    CalendarIcon,
    CheckIcon,
    FolderIcon,
    MoveVerticalIcon
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu"


export default function DashboardPage() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            {/* <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b bg-background px-4 sm:px-6">
                <div className="flex items-center gap-4">
                    <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
                        <CheckIcon className="h-6 w-6" />
                        <span className="text-lg">Todo App</span>
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <img
                                    src="/placeholder.svg"
                                    width={36}
                                    height={36}
                                    alt="Avatar"
                                    className="rounded-full"
                                    style={{ aspectRatio: "36/36", objectFit: "cover" }}
                                />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header> */}
            <div className="flex flex-1 gap-4 p-4 sm:px-6 sm:py-4">
                <div className="hidden w-64 flex-col gap-4 sm:flex">
                    <Card>
                        <CardHeader>
                            <CardTitle>Categories</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-2">
                                <Link
                                    href="#"
                                    className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                                    prefetch={false}
                                >
                                    <div className="flex items-center gap-2">
                                        <FolderIcon className="h-4 w-4" />
                                        <span>Work</span>
                                    </div>
                                    <Badge>12</Badge>
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                                    prefetch={false}
                                >
                                    <div className="flex items-center gap-2">
                                        <CalendarIcon className="h-4 w-4" />
                                        <span>Personal</span>
                                    </div>
                                    <Badge>8</Badge>
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                                    prefetch={false}
                                >
                                    <div className="flex items-center gap-2">
                                        <CheckIcon className="h-4 w-4" />
                                        <span>Shopping</span>
                                    </div>
                                    <Badge>4</Badge>
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                                    prefetch={false}
                                >
                                    <div className="flex items-center gap-2">
                                        <AlarmClockIcon className="h-4 w-4" />
                                        <span>Reminders</span>
                                    </div>
                                    <Badge>6</Badge>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Priorities</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-2">
                                <Link
                                    href="#"
                                    className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                                    prefetch={false}
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-red-500" />
                                        <span>High</span>
                                    </div>
                                    <Badge>4</Badge>
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                                    prefetch={false}
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-yellow-500" />
                                        <span>Medium</span>
                                    </div>
                                    <Badge>12</Badge>
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                                    prefetch={false}
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-green-500" />
                                        <span>Low</span>
                                    </div>
                                    <Badge>8</Badge>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex flex-1 flex-col gap-4">
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
                                            <div className="font-medium">Finish weekly report</div>
                                            <div className="text-sm text-muted-foreground">Complete the weekly sales report by Friday.</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline" className="bg-yellow-500/20 text-yellow-500">
                                            Medium
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
                                        <Checkbox defaultChecked />
                                        <div>
                                            <div className="font-medium line-through">Buy groceries</div>
                                            <div className="text-sm text-muted-foreground">Pick up milk, eggs, and bread from the store.</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline" className="bg-green-500/20 text-green-500">
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
                                            <div className="font-medium">Prepare for client meeting</div>
                                            <div className="text-sm text-muted-foreground">
                                                Review the presentation and gather necessary materials.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline" className="bg-red-500/20 text-red-500">
                                            High
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
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}