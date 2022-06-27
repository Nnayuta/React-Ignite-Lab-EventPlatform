import { Navigate, Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";

import { useGetLessonsQuery } from "./graphql/generated";

export function Router() {

    const { data } = useGetLessonsQuery();

    return (
        <Routes>
            <Route path="/" element={<Subscribe />} />
            <Route path="/event" element={data && <Navigate replace to={`/event/lesson/${data?.lessons[0]?.slug}`} />} />
            <Route path="/event/lesson" element={data && <Navigate replace to={`/event/lesson/${data?.lessons[0]?.slug}`} />} />
            <Route path="/event/lesson/:slug" element={<Event />} />
        </Routes>
    )
}