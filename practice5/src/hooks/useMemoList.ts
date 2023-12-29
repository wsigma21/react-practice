import { useState, useCallback } from "react";


export const useMemoList = () => {
  const [memos, setMemos] = useState<string[]>([]);

  const addTodo = useCallback((text:string) => {
    const newMemos = [...memos, text];
    setMemos(newMemos);
  }, [memos]);

  const deleteTodo = useCallback((index:number) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
  },[memos]);

  return { memos, addTodo, deleteTodo}
}