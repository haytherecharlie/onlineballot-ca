import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'
import wardsGeoJson from 'config/wards.json'
import * as A from 'services/redux/actions'

const useGeoLookup = () => {
  const dispatch = useDispatch()
  const { streetAddress } = useSelector(s => s.address)
  const [status, setStatus] = useState('Getting Geo JSON Data...')

  useEffect(() => {
    const getCoordsFromAddress = async () => {
      try {
        const [code] = await geocodeByAddress(streetAddress)
        return await getLatLng(code)
      } catch (err) {
        throw new Error('Error fetching Geo Code from Address.')
      }
    }

    const loadGeoJson = () => {
      try {
        if (typeof window !== 'undefined') {
          require('mapbox.js')
          return L.geoJson(wardsGeoJson)
        }
      } catch (err) {
        throw new Error('Error loading Geo JSON.')
      }
    }

    const determineWard = async () => {
      try {
        const leaflet = require('@mapbox/leaflet-pip')
        const [coords, geoJson] = await Promise.all([getCoordsFromAddress(), loadGeoJson()])
        const [point] = leaflet.pointInLayer(coords, geoJson, true)
        if (point !== undefined) {
          const ward = point.feature.properties.WARDS
          return dispatch({ type: A.FULL_ADDRESS, value: { coords, ward, streetAddress }, screen: 'Ballot' })
        }
        return dispatch({ type: A.NAVIGATE, value: 'WardFinder' })
      } catch (err) {
        throw err
      }
    }

    try {
      determineWard()
    } catch (err) {
      console.log(err)
      return setStatus('Error determining ward.')
    }
  }, [dispatch, streetAddress])

  return status
}

export default useGeoLookup
