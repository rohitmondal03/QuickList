"use client"

import Link from "next/link"
import {
    AlarmClockIcon,
    CalendarIcon,
    CheckIcon,
    FolderIcon,
} from "lucide-react"

import { useUserToDo } from "@/hooks/use-user-todo"
import { TodosCardLoader } from "./todos-card-loader"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card"


export function CategoriesCard() {
    const { isFetching, todosCategoryNumbers, } = useUserToDo();


    return (
        <Card>
            <CardHeader>
                <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
                {isFetching ? (
                    <TodosCardLoader />
                ) : (
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
                            <Badge>
                                {todosCategoryNumbers.work}
                            </Badge>
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
                            <Badge>
                                {todosCategoryNumbers.personal}
                            </Badge>
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
                            <Badge>
                                {todosCategoryNumbers.shopping}
                            </Badge>
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
                            <Badge>
                                {todosCategoryNumbers.remainders}
                            </Badge>
                        </Link>
                    </div>
                )}
            </CardContent>
        </Card>

    )
}
