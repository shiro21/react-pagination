


const Pagination = ({postLen, limit, page, setPage}) => {

    const pageNumber = Math.ceil(postLen / limit);

    return (
        <>
            <nav>
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>&lt;</button>
                {
                    Array(pageNumber)
                    .fill()
                    .map((a, i) => (
                        <button key={i} onClick={() => setPage(i + 1)} aria-current={page === i + 1 ? "page" : null}>{i + 1}</button>
                    ))
                }
                <button onClick={() => setPage(page + 1)} disabled={page === pageNumber}>&gt;</button>
            </nav>
        </>
    );
};

export default Pagination;