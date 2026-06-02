import { useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"

import legacyMapStyle from "../mapstylelegacy.json"
import mapsApiKeyRaw from "../maps_key.txt?raw"
import markerUrl from "../marker.png"

const mapsApiKey = mapsApiKeyRaw.trim()
const mapsScriptId = "google-maps-js"
const venueLocation = { lat: 53.481054, lng: -2.250059 }
const mapsDeepLink = "https://maps.app.goo.gl/RPnynK9A5vti9aW57"

const StyledMap = styled.div(props => css`
  width: 100%;
  aspect-ratio: 1 / 1;
  border: 0;
  border-radius: .75rem;
  @media (min-width: ${props.theme.breakpoints.mobile}) {
    aspect-ratio: 4 / 3;
  }
`)

const loadGoogleMapsApi = () => {
  if (window.google?.maps) {
    return Promise.resolve(window.google.maps)
  }

  return new Promise((resolve, reject) => {
    const existingScript = document.getElementById(mapsScriptId)

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(window.google.maps), { once: true })
      existingScript.addEventListener("error", () => reject(new Error("Could not load Google Maps.")), { once: true })
      return
    }

    const script = document.createElement("script")
    script.id = mapsScriptId
    script.async = true
    script.defer = true
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(mapsApiKey)}&v=weekly`
    script.onload = () => resolve(window.google.maps)
    script.onerror = () => reject(new Error("Could not load Google Maps."))

    document.head.appendChild(script)
  })
}

export const Map = props => {
  const mapElementRef = useRef(null)
  const [loadError, setLoadError] = useState("")

  useEffect(() => {
    let isUnmounted = false

    const initializeMap = async () => {
      try {
        const maps = await loadGoogleMapsApi()

        if (isUnmounted || !mapElementRef.current) {
          return
        }

        const map = new maps.Map(mapElementRef.current, {
          center: venueLocation,
          zoom: 16,
          disableDefaultUI: true,
          zoomControl: true,
          gestureHandling: "cooperative",
          styles: legacyMapStyle
        })

        const marker = new maps.Marker({
          position: venueLocation,
          map,
          icon: {
            url: markerUrl
          }
        })

        marker.addListener("click", () => {
          window.open(mapsDeepLink, "_blank", "noopener,noreferrer")
        })
      } catch (error) {
        if (!isUnmounted) {
          setLoadError("Map failed to load. Please refresh and try again.")
        }
      }
    }

    initializeMap()

    return () => {
      isUnmounted = true
    }
  }, [])

  return (
    <>
      {loadError ? <p>{loadError}</p> : null}
      <StyledMap
        ref={mapElementRef}
        className={props.className}
        $minHeight={props.$minHeight}
        aria-label='Wedding location map'
        role='img'
      />
    </>
  )
}
