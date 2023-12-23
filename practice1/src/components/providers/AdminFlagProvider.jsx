import { useState, createContext } from "react";

// Contextの器を作成する
export const AdminFlagContext = createContext({});

export const AdminFlagProvider = props => {
  const { children } = props;

  // 管理者フラグ
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    // 作成したContextのProviderに渡したい値を持つ
    <AdminFlagContext.Provider value={{isAdmin, setIsAdmin}}>
      {children}
    </AdminFlagContext.Provider>
  )
}