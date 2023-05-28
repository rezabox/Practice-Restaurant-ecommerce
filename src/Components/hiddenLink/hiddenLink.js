import { useSelector } from 'react-redux';
import { SelectisLoggedIn } from '../../redux/slice/authSlice';

export const ShowOnLogin = ({ children }) =>{
     const isLoggedIn = useSelector(SelectisLoggedIn);
     if(isLoggedIn){
       return children;
     }else{
      return null
     }
};
 
export const ShowOnLogout = ({ children }) => {
      const isLoggedIn = useSelector(SelectisLoggedIn);
      if(!isLoggedIn){
        return children;
      }else{
        return null;
      }
}