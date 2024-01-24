export const useGetUserInfo=()=>{
    const {name,profilephoto,userid,isAuth}=JSON.parse(
        localStorage.getItem("auth")
    
    );
return {name,profilephoto,userid,isAuth};
};