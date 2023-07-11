import { AdminRouter, AppRouter, EditorRouter } from "../routes";

export const  APPS =[
        {
                subdomain : "www",
                app:AppRouter,
                main:true
        },
        {
                subdomain : "editor",
                app:EditorRouter,
                main:false
        },
        {
                subdomain : "admin",
                app:AdminRouter,
                main:false
        }
]