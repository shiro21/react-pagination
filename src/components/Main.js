import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";



const Main = ({posts}) => {

    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    
    return (
        <article>
            <div>
                표시할 페이지 수 &lt; pageNumber 전체보기 &gt; &nbsp;
                <select value={limit} onChange={({target: { value }}) => setLimit(Number(value))}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                <Link to="/main2/1">이동</Link>
            </div>
            {
                posts.slice(offset, offset + limit).map((item) => (
                    <section key={item.id}>
                        <h3>{item.id}. {item.title}</h3>
                        <p>{item.body}</p>
                    </section>
                ))
            }

            <Pagination
                postLen={posts.length}
                limit={limit}
                page={page}
                setPage={setPage}
            />
        </article>
    );
};

export default Main;