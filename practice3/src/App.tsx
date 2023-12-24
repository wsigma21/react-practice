import "./App.css";
import { UserCard } from "./components/UserCard"
import { useAllUsers } from "./hooks/useAllUsers"

function App() {
  const { getUsers, userProfiles, isLoading, error } = useAllUsers();
  const onClickFetchUser = () => {
    getUsers();
  };

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      { error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
        ) : isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {userProfiles.map((user) => {
              return (
                <UserCard key={user.id} user={user} />
              )
            })}
          </>
        ) }

    </div>
  );
}

export default App;
