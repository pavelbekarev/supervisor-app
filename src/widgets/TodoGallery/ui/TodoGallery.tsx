import type { Todo } from "#entities/Todo";
import { useTodoStore } from "#entities/Todo/model/store";
import Pagination from "#features/Pagination";
import { usePagination } from "#features/Pagination/model/usePagination";
import TodoCard from "#features/TodoCard"
import { useLoadTodos } from "../model/useLoadTodos";
import "../style.scss"

export function TodoGallery() {
    const { isLoading } = useLoadTodos();
    const todos = useTodoStore(state => state.todos)
    const { currentItems, page, pagesCount, setPage } = usePagination(todos, 12);

    return (
        <div className="todoGallery">
            <div className="todoGallery__items">
                {
                    !isLoading || currentItems?.length !== 0 ? currentItems?.map((item: Todo) => (
                        <TodoCard
                            key={item.id}
                            todo={item}
                        />
                    )) :
                    <h1>Данные загружаются. Пожалуйста, подождите</h1>  
                }
            </div>
            
            <Pagination 
                page={page}
                pagesCount={pagesCount}
                setPage={setPage}
            />
        </div>
    )
}
