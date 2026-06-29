import { useState, useCallback } from 'react'
import type { FrameworkId, Framework } from '@/types'
import { frameworks } from '@/data/frameworks'

export function useFrameworkCompass() {
  const [activeId, setActiveId] = useState<FrameworkId | null>(null)

  const activeFramework: Framework | null =
    activeId ? (frameworks.find((f) => f.id === activeId) ?? null) : null

  const selectFramework = useCallback((framework: Framework) => {
    setActiveId(framework.id)
  }, [])

  const clearSelection = useCallback(() => {
    setActiveId(null)
  }, [])

  return { activeId, activeFramework, selectFramework, clearSelection }
}
