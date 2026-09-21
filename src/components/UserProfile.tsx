import { useAppContext } from './useAppContext'

function UserProfile() {
  const { selectedUser, toggleFavorite } = useAppContext()

  return (
    <article className="profile-card">
      <div className="profile-top">
        <span className="profile-avatar" style={{ backgroundColor: selectedUser.color }}>
          {selectedUser.initials}
        </span>
        <button
          aria-label={selectedUser.isFavorite ? 'Прибрати з обраного' : 'Додати в обране'}
          className={`favorite-button ${selectedUser.isFavorite ? 'is-favorite' : ''}`}
          onClick={() => toggleFavorite(selectedUser.id)}
          type="button"
        >
          {selectedUser.isFavorite ? '★' : '☆'}
        </button>
      </div>

      <span className="section-label">Профіль учасника</span>
      <h2>{selectedUser.name}</h2>
      <p className="profile-role">{selectedUser.role}</p>
      <p className="profile-description">{selectedUser.description}</p>

      <div className="profile-details">
        <div>
          <span className="detail-label">Email</span>
          <strong>{selectedUser.email}</strong>
        </div>
        <div>
          <span className="detail-label">Локація</span>
          <strong>{selectedUser.location}</strong>
        </div>
      </div>

      <div className="context-note">
        <span>useContext</span>
        <p>Цей профіль оновлюється без передачі props через усі рівні компонентів.</p>
      </div>
    </article>
  )
}

export default UserProfile