"use client"


import { useUserToDo } from "@/hooks/use-user-todo"
import { TodosCardLoader } from "./todos-card-loader"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card"


export function TasksCard() {
    const { latestTodo, isFetching } = useUserToDo();


    return (
        <Card>
            <CardHeader>
                <CardTitle>Tasks</CardTitle>
            </CardHeader>
            <CardContent>
                {isFetching ? (
                    <TodosCardLoader />
                ) : (
                    <div className="w-full space-y-4">
                        {latestTodo?.map((doc, idx) => (
                            <TaskBox {...doc} key={idx} />
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>

    )
}


const TaskBox = (props: TDocuments) => {
    return (
        <div className="flex items-center justify-around border border-slate-300 rounded-2xl py-3">
            <p className="text-sm font-medium">
                {new Date(props.createdAt).toDateString()}
            </p>
            <div className="w-[400px]">
                <h1 className="text-xl font-bold">
                    {props.title}
                </h1>
                <p className="text-sm">
                    {props.description}
                </p>
            </div>
            <div className="w-[100px]">
                <Badge>
                    {props.category}
                </Badge>
            </div>
            <div className="w-[70px] text-sm">
                <Badge
                    variant="outline"
                    className={props.priority === "Medium"
                        ? "bg-yellow-500/20 text-yellow-500"
                        : props.priority === "Low"
                            ? "bg-green-500/20 text-green-500"
                            : "bg-red-500/20 text-red-500"
                    }
                >
                    {props.priority}
                </Badge>
            </div>
        </div>
    )
}