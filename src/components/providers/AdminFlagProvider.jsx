import { createContext } from "react";

// Contextの器を作成する
export const AdminFlagContext = createContext({});

export const AdminFlagProvider = props => {
  const { children } = props;

  // 動作確認のために、適当なオブジェクトを定義
  const sampleObject = { sampleValue : "テスト"};
  return (
    // 作成したContextのProviderに渡したい値を持つ
    <AdminFlagContext.Provider value={sampleObject}>
      {children}
    </AdminFlagContext.Provider>
  )
}