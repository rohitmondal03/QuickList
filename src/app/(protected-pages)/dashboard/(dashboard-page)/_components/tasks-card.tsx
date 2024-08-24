"use client"

import { useUserToDo } from "@/hooks/use-user-todo"
import { TaskDialogContent } from "./task-dialog-content"
import { TodosCardLoader } from "./todos-card-loader"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
} from "@/components/ui/card"
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogContainer,
} from '@/components/ui/dialog';


export function TasksCard() {
    const { latestTodo, isFetching } = useUserToDo();


    return (
        <Card>
            <CardHeader>
                <CardTitle>Tasks</CardTitle>
                <CardDescription>
                    Your latest added tasks
                </CardDescription>
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
            </CardContent >
        </Card >
    )
}


const TaskBox = (props: TDocuments) => {
    return (
        <Dialog
            transition={{
                type: 'spring',
                stiffness: 240,
                damping: 24,
            }}>
            <DialogTrigger
                style={{
                    borderRadius: "4px"
                }}
            >
                <div className="flex items-center justify-around border border-slate-300 rounded-xl py-3"
                >
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
            </DialogTrigger>
            <DialogContainer>
                <DialogContent
                    style={{
                        borderRadius: "1rem",
                    }}
                    className="bg-black/80 text-white p-4"
                >
                   <TaskDialogContent {...props} />
                </DialogContent>
            </DialogContainer>
        </Dialog>
    )
}