import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectEmail } from "../../redux/slice/authSlice";

const AdminOnlyRoute = ({ children })=>{
      const userEmail = useSelector(selectEmail);
      if(userEmail === "reza.asareh81@gmail.com"){
        return children;
      }
      return(
         <section className="height:80vh">
            <div className="cont_admin">
                <h2>ورود به صفحه با خطا مواجه شد</h2>
                <p>این صفحه فقط برای پنل آدمین قابل استفاده است</p>
                <br/>
                <Link to="/">
                  <button className="--btn">&larr; بازگشت به صفحه اصلی </button>
                </Link>
            </div>
         </section>        
      );
};
export const AdminOnlyLink = ({ children }) => {
    const userEmail = useSelector(selectEmail);
    
    if(userEmail === "reza.asareh81@gmail.com") {
         return children;
    }
    return null;
};


export default AdminOnlyRoute;