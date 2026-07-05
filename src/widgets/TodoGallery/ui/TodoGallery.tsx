import type { Todo } from "#entities/Todo";
import { useTodoList } from "#entities/Todo/model/store";
import Pagination from "#features/Pagination";
import { usePagination } from "#features/Pagination/model/usePagination";
import TodoCard from "#features/TodoCard"
import { useTodos } from "../model/useQuery";
import "../style.scss"

export function TodoGallery() {
    const { isLoading } = useTodos();
    const todos = useTodoList(state => state.todos)
    const { currentItems, page, pagesCount, setPage } = usePagination(todos, 12);

    return (
        <div className="todoGallery">
            <div className="todoGallery__items">
                {
                    !isLoading ? currentItems?.map((item: Todo) => (
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
