"use client"

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useUserToDo } from '@/hooks/use-user-todo'
import { ButtonTextCompoundInput, ButtonIconsInput } from '@fullcalendar/core/index.js'


export default function CalendarViewPage() {
    const { data } = useUserToDo();


    return (
        <div className=''>
            <h1>
                View Your ToDos in Calendar view
            </h1>
            <div className='py-16 px-12'>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    events={data?.map(item => ({
                        title: item.title,
                        date: item.createdAt,
                        color: item.priority === "High"
                            ? "red"
                            : item.priority === "Low"
                                ? "green"
                                : "orange"
                    }))}
                    buttonText={{
                        today: "Today",
                        next: "Next",
                        prev: "Prev",
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
