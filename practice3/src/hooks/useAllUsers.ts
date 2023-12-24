
import { useState } from "react";
import axios from "axios";
import { User } from "../types/api/user";
import { UserProfile } from "../types/userProfile";

// 全ユーザー一覧を取得するカスタムフック
export const useAllUsers = () => {
  const [ userProfiles, setUserProfiles ] = useState<Array<UserProfile>>([])
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(false);

  const getUsers = () => {
    setIsLoading(true);
    setError(false);

    axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users").then((res) => {
      const data = res.data.map((user) => ({
        id: user.id,
        name: `${user.name}(${user.username})`,
        email: user.email,
        address: `${user.address.city}${user.address.suite}${user.address.street}`
      }));
      setUserProfiles(data);
    }).catch(() => {
      setError(true);
    }).finally(()=>setIsLoading(false));
  }

  return { getUsers, userProfiles, isLoading, error }
}