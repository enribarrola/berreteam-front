import {create} from "zustand";



const UserLoginData = create((set) => ({
    isLogged: false,
    setLogged: (value) => set({ isLogged: value }),
}))

export default UserLoginData;