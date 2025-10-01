import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.services.ts";

export const AuthResourcePage = () => {

    useEffect(() => {
        loadAuthProducts().then(allProducts => {
            console.log(allProducts);
        }).catch(reason => {
            console.log(reason);
            refresh().then(() => loadAuthProducts())
        })
    }, [])

    return (
        <div>
            Auth Resource Page
        </div>
    );
};