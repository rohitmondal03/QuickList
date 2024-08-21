"use client"

import Link from "next/link"

import { useUserToDo } from "@/hooks/use-user-todo";
import { TodosCardLoader } from "./todos-card-loader";
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card"


export function PrioritiesCard() {
    const { data, isFetching } = useUserToDo();


    return (
        <Card>
            <CardHeader>
                <CardTitle>Priorities</CardTitle>
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
                                <div className="h-2 w-2 rounded-full bg-red-500" />
                                <span>High</span>
                            </div>
                            <Badge>
                                {data?.filter(doc => doc.priority === "High").length}
                            </Badge>
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
                            <Badge>
                                {data?.filter(doc => doc.priority === "Medium").length}
                            </Badge>
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
                            <Badge>
                                {data?.filter(doc => doc.priority === "Low").length}
                            </Badge>
                        </Link>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
