import { AppProvider } from './AppContext'
import UserList from './UserList'
import UserProfile from './UserProfile'
import '../App.css'

function App() {
  return (
    <AppProvider>
      <main className="app-shell">
        <header className="app-header">
          <div>
            <span className="eyebrow">React demo</span>
            <h1>Команда поруч</h1>
            <p className="subtitle">
              Простий приклад передачі даних між компонентами через <code>useContext</code>.
            </p>
          </div>
          <div className="context-badge">
            <span className="status-dot" />
            Context active
          </div>
        </header>

        <section className="workspace" aria-label="Демонстрація useContext">
          <UserList />
          <UserProfile />
        </section>
      </main>
    </AppProvider>
  )
}

export default App
