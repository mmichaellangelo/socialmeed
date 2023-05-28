import { LoaderFunctionArgs, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import PostCardsArea from "../components/PostCardsArea/PostCardsArea";

export default function Root() {
    return (
        <div className="Root">
            <Header />
            <Outlet />
        </div>
    )
}

export async function rootLoader() {
    return
}