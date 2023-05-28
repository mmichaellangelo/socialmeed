import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import UserProfilePage from "../components/UserProfilePage/UserProfilePage";
import { getUser } from "../database/getData";
import { User } from "../types/user";

export default function User() {
    const userData = useLoaderData() as User

    const user: User = {
        username: userData?.username ?? "",
        first_name: userData?.first_name ?? "",
        last_name: userData?.last_name ?? "",
        bio: userData?.bio ?? "",
        profile_picture_url: userData?.profile_picture_url ?? "",
    }

    return (<UserProfilePage {...user} />)    
}

export async function userLoader({ params }: any) {
    const userData = await getUser(params.userId)
    console.log(userData)
    return userData
}