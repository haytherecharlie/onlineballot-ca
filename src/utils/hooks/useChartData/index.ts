import React, { useState, useEffect } from 'react'
import { SET_CHART_DATA } from 'services/redux'
import { useSelector, useDispatch } from 'react-redux'
import { db } from 'services/firebase'

const useChartData = () => {
  const dispatch = useDispatch()
  const { uid } = useSelector((s) => s.user.data)

  const handleSnapshot = (snap) => {
    const chartData = {}
    snap.forEach((val) => {
      const data = val.data()
      const category = val.id
      const keys = Object.keys(data)
      const values = Object.values(data)
      chartData[`${category}`] = { labels: keys, datasets: [{ data: values }], fromZero: true }
    })
    dispatch({ type: SET_CHART_DATA, value: chartData })
  }

  useEffect(() => {
    const listener = db.doc(`pulsecheck/${uid}`).collection(`responses`).onSnapshot(handleSnapshot)
    return () => listener()
  }, [])
}

export default useChartData
