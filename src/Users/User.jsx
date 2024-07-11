import "./User.css";

export const User = ({ user }) => {
  return (
    <div className="user">
      <div>
        <div className="user-info">Name</div>
        <div>{user.fullName}</div>
      </div>
      <div>
        <div className="user-info">email</div>
        <div>{user.email}</div>
      </div>
    </div>
  );
};
