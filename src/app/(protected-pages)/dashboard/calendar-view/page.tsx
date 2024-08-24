"use client"

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useUserToDo } from '@/hooks/use-user-todo'


export default function CalendarViewPage() {
    const { data } = useUserToDo();


    return (
        <div className="flex min-h-screen w-full flex-col bg-background py-16">
            <h1 className='text-3xl font-bold text-center'>
                View Your ToDos in Calendar view
            </h1>
            <div className='py-16 px-24'>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    events={data?.map(item => ({
                        title: item.title,
                        date: new Date(item.createdAt),
                        color: item.priority === "High"
                            ? "red"
                            : item.priority === "Low"
                                ? "green"
                                : "orange"
                    }))}
                    buttonText={{
                        today: "Current month",
                        next: ">",
                        prev: "<",
                    }}
                    titleFormat={{
                        separator: " - ",
                        dateStyle: "medium",
                    }}
                />
            </div>
        </div>
    )
}
