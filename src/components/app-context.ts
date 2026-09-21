import { createContext } from 'react'

import type { User } from './AppContext'

export type AppContextValue = {
  users: User[]
  selectedUser: User
  selectUser: (id: number) => void
  toggleFavorite: (id: number) => void
}

export const AppContext = createContext<AppContextValue | null>(null)
