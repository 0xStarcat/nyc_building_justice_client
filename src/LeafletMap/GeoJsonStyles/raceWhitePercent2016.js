const raceWhitePercent2016 = (value, thresholdValue) => {
  if (!value) {
    return {
      color: 'white',
      fillColor: 'white',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 1
    }
  } else if (value >= 70) {
    return {
      color: 'white',
      fillColor: '#005a32',
      opacity: 0.5,
      fillOpacity: 0.7,
      weight: 1
    }
  } else if (value >= 60) {
    return {
      color: 'white',
      fillColor: '#238443',
      opacity: 0.5,
      fillOpacity: 0.7,
      weight: 1
    }
  } else if (value >= 50) {
    return {
      color: 'white',
      fillColor: '#41ab5d',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 1
    }
  } else if (value >= 40) {
    return {
      color: 'white',
      fillColor: '#addd8e',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 1
    }
  } else if (value >= 30) {
    return {
      color: 'white',
      fillColor: '#d9f0a3',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 1
    }
  } else if (value >= 20) {
    return {
      color: 'white',
      fillColor: '#ffffcc',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 1
    }
  } else {
    return {
      color: 'white',
      fillColor: '#edf8e9',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 1
    }
  }
}

export default raceWhitePercent2016
