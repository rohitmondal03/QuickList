type TProps = {
    params: {
        todo_id: string
    }
}


export default function SingleToDoPage({ params }: TProps) {
    const { todo_id } = params;

    return (
        <div>
            {todo_id}
        </div>
    )
}
