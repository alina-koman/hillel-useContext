import { useMemo, useState, type ReactNode } from 'react'

import { AppContext, type AppContextValue } from './app-context'

export type User = {
  id: number
  name: string
  role: string
  email: string
  location: string
  initials: string
  color: string
  description: string
  isFavorite: boolean
}

const initialUsers: User[] = [
  {
    id: 1,
    name: 'Анна Коваленко',
    role: 'Frontend developer',
    email: 'anna@example.com',
    location: 'Київ, Україна',
    initials: 'АК',
    color: '#7c5cff',
    description: 'Створює зрозумілі інтерфейси та перетворює складні задачі на прості рішення.',
    isFavorite: true,
  },
  {
    id: 2,
    name: 'Максим Шевченко',
    role: 'Product designer',
    email: 'maksym@example.com',
    location: 'Львів, Україна',
    initials: 'МШ',
    color: '#f06b9a',
    description: 'Досліджує потреби користувачів і допомагає команді робити продукт кориснішим.',
    isFavorite: false,
  },
  {
    id: 3,
    name: 'Софія Мельник',
    role: 'Project manager',
    email: 'sofia@example.com',
    location: 'Одеса, Україна',
    initials: 'СМ',
    color: '#2ba88a',
    description: 'Організовує командну роботу, планує релізи та тримає фокус на результаті.',
    isFavorite: false,
  },
]

export function AppProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState(initialUsers)
  const [selectedUserId, setSelectedUserId] = useState(initialUsers[0].id)

  const value = useMemo<AppContextValue>(() => {
    const selectedUser = users.find((user) => user.id === selectedUserId) ?? users[0]

    return {
      users,
      selectedUser,
      selectUser: setSelectedUserId,
      toggleFavorite: (id) => {
        setUsers((currentUsers) =>
          currentUsers.map((user) =>
            user.id === id ? { ...user, isFavorite: !user.isFavorite } : user,
          ),
        )
      },
    }
  }, [selectedUserId, users])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}