const url =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"

fetch(url)
  .then((resp) => {
    return resp.json()
  })
  .then((stations) => {
    const s1 = stations
      .filter((station) => {
        return station.ar.includes("民權西路")
      })
      .filter((station) => {
        return station.available_rent_bikes >= 10
      })
      .map((station) => {
        const address = station.ar
        const bikes = station.available_rent_bikes
        return `(${bikes}) ${address}`
      })
      .forEach((item) => {
        console.log(item)
      })
  })
  .catch((err) => {
    console.log(err)
  })