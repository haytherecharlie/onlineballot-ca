import React, { useState, useEffect } from 'react'
import { SET_JOB_SATISFACTION, SET_MANAGER_APPROVAL, SET_MY_PERFORMANCE, SET_TEAM_RATING } from 'services/redux'
import { useSelector, useDispatch } from 'react-redux'
import { db } from 'services/firebase'

const useChartData = () => {
  const dispatch = useDispatch()
  const { uid } = useSelector((s) => s.user.data)

  const getJobSatisfactionRatings = async () => {
    const request = await db.doc(`pulsecheck/${uid}/responses/job_satisfaction`).get()
    const data = request.data()
    const keys = Object.keys(data)
    const values = Object.values(data)
    const intValues = values.map((val) => parseInt(val, 10))
    dispatch({
      type: SET_JOB_SATISFACTION,
      value: { labels: keys, datasets: [{ data: intValues }], fromZero: true }
    })
  }

  const getManagerApprovalRatings = async () => {
    const request = await db.doc(`pulsecheck/${uid}/responses/manager_approval`).get()
    const data = request.data()
    const keys = Object.keys(data)
    const values = Object.values(data)
    const intValues = values.map((val) => parseInt(val, 10))
    dispatch({
      type: SET_MANAGER_APPROVAL,
      value: { labels: keys, datasets: [{ data: intValues }], fromZero: true }
    })
  }

  const getMyPerformanceRatings = async () => {
    const request = await db.doc(`pulsecheck/${uid}/responses/my_performance`).get()
    const data = request.data()
    const keys = Object.keys(data)
    const values = Object.values(data)
    const intValues = values.map((val) => parseInt(val, 10))
    dispatch({
      type: SET_MY_PERFORMANCE,
      value: { labels: keys, datasets: [{ data: intValues }], fromZero: true }
    })
  }

  const getTeamRatings = async () => {
    const request = await db.doc(`pulsecheck/${uid}/responses/team_rating`).get()
    const data = request.data()
    const keys = Object.keys(data)
    const values = Object.values(data)
    const intValues = values.map((val) => parseInt(val, 10))
    dispatch({
      type: SET_TEAM_RATING,
      value: { labels: keys, datasets: [{ data: intValues }], fromZero: true }
    })
  }

  useEffect(() => {
    getJobSatisfactionRatings()
    getManagerApprovalRatings()
    getMyPerformanceRatings()
    getTeamRatings()
  }, [])
}

export default useChartData
