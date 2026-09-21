import { useAppContext } from './useAppContext'

function UserList() {
  const { users, selectedUser, selectUser } = useAppContext()

  return (
    <aside className="user-list">
      <div className="section-heading">
        <div>
          <span className="section-label">Учасники</span>
          <h2>Наша команда</h2>
        </div>
        <span className="user-count">{users.length}</span>
      </div>

      <div className="users">
        {users.map((user) => (
          <button
            className={`user-item ${user.id === selectedUser.id ? 'is-selected' : ''}`}
            key={user.id}
            onClick={() => selectUser(user.id)}
            type="button"
          >
            <span className="avatar" style={{ backgroundColor: user.color }}>
              {user.initials}
            </span>
            <span className="user-item-copy">
              <strong>{user.name}</strong>
              <small>{user.role}</small>
            </span>
            {user.isFavorite && <span className="favorite-mark">★</span>}
          </button>
        ))}
      </div>

      <p className="hint">Натисни на учасника, щоб переглянути профіль</p>
    </aside>
  )
}

export default UserList