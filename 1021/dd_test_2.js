const url = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"

fetch(url)
    .then((resp) => {
        return resp.json()
    })
    .then((youbike) => {
        youbike.forEach((station) => {
            const stationName = station.sna.replace("YouBike2.0_", "")
            console.log(stationName)
        })
    })