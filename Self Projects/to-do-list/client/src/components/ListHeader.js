function ListHeader({ listName }) {
  const signOut = () => {
    console.log("signOut");
  };
  return (
    <div className="list-header">
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create">Add new </button>
        <button className="sign-out" onClick={signOut}>
          SignOut{" "}
        </button>
      </div>
    </div>
  );
}

export default ListHeader;
