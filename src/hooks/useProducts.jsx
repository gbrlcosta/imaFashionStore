import React, { useMemo } from 'react'
import { productsData } from '../database/productsData'

export function useProducts() {
  return useMemo(() => productsData, [])
}

export function useProduct(id) {
  return useMemo(() => {
    for (let i = 0; i < productsData.length; i++) {
      if (productsData[i].id === id) {
        return productsData[i]
      }
    }
    return null
  }, [id])
}
