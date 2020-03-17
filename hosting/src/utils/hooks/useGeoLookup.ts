import 'mapbox.js'
import { useEffect, useState } from 'react'
import wardsGeoJson from 'config/wards.json'
import { useSelector, useDispatch } from 'react-redux'
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'
import leaflet from '@mapbox/leaflet-pip'

const useGeoLookup = () => {
  const dispatch = useDispatch()
  const address = useSelector(s => s.address)
  const [status, setStatus] = useState('Getting Geo JSON Data...')

  useEffect(() => {
    const getCoordinatesFromAddress = async () => {
      const [code] = await geocodeByAddress(address.description)
      return await getLatLng(code)
    }

    const loadWardsGeoJson = async () => {
      if (typeof window !== 'undefined') {
        return L.geoJson(wardsGeoJson)
      }
    }

    if (address && address.description) {
      Promise.all([getCoordinatesFromAddress(), loadWardsGeoJson()]).then(([point, geo]) => {
        const layer = leaflet.pointInLayer(point, geo, true)
        if (layer.length) {
          const ward = layer[0].feature.properties.WARDS
          console.log(ward)
        }
        dispatch({ type: 'yes' })
      })
    }
    setStatus('There was an error')
  }, [address, dispatch])

  return status
}

export default useGeoLookup
