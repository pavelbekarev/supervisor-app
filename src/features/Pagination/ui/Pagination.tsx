import { useTodoList } from "#entities/Todo/model/store";
import "../style.scss"

export function Pagination({ page, pagesCount, setPage }: { page: number; pagesCount: number; setPage: any } ) {
    return (
        <div className="pagination">
            <button
                className="pagination__next pagination__button"
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
            >
                Назад
            </button>

            <span className="pagination__text">{page} / {pagesCount}</span>

            <button
                className="pagination__prev pagination__button"
                disabled={page === pagesCount}
                onClick={() => setPage(page + 1)}
            >
                Вперед
            </button>
        </div>
    )
}
