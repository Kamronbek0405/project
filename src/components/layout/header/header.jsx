import React from "react"
import {Link} from "react-router-dom";
export const Header = ()=>{
    return <div className="w-[100%x] h-[50px] flex items-center justify-center gap-20   mt-5">
        <Link className="w-[90px] h-[40px] bg-slate-100 flex items-center justify-center shadow-md shadow-gray-600" to={'/'}>Home</Link>
        <Link className="w-[90px] h-[40px] bg-slate-100 flex items-center justify-center shadow-md shadow-gray-600"  to={'/about'}>About</Link> 
        <Link className="w-[90px] h-[40px] bg-slate-100 flex items-center justify-center shadow-md shadow-gray-600"  to={'/contant'}>Contact</Link>
    </div>

}