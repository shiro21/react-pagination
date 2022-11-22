import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { useNavigate, useParams } from "react-router-dom";
import '../styles/main2.css';

const Main2 = ({posts}) => {
    
    const navigation = useNavigate();
    const params = useParams();

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const offset = (page - 1) * limit;

    useEffect(() => {
        const changeNum = parseInt(params.id);
        setPage(changeNum);
    }, [params.id])
    const handlePageChange = (page) => {
        setPage(page);
        navigation(`/main2/${page}`);
    };
    console.log('TEST', params);

    // activePage: 현재 페이지
    // itemsCountPerPage: 한 페이지당 보여줄 리스트 아이템의 개수
    // totalItemsCount: 총 아이템의 개수
    // pageRangeDisplayed: Paginator 내에서 보여줄 페이지의 범위
    // prevPageText: "이전"을 나타낼 텍스트 (prev, <, ...)
    // nextPageText: "다음"을 나타낼 텍스트 (next, >, ...)
    // onChange: 페이지가 바뀔 때 핸들링해줄 함수
    return (
        <>
            {
                posts.slice(offset, offset + limit).map((item) => (
                    <section key={item.id}>
                        <h3>{item.id}. {item.title}</h3>
                        <p>{item.body}</p>
                    </section>
                ))
            }

            <Pagination
                activePage={page}
                itemsCountPerPage={limit}
                totalItemsCount={posts.length}
                pageRangeDisplayed={limit}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={handlePageChange}
            />
        </>
    );
};

export default Main2;