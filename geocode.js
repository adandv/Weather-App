const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoiZGlub3NhdXJpb2pzIiwiYSI6ImNrZGM5ZW9hYTQyN2UydXF5dzBwcmtjdDQifQ.YgWQUHqHjRgnSE0dOuR9XA&limit=0'

    request({ url: url, json: true }, (error, response) => {

        if (error) {
            callback('Unable to connect to location service!', undefined)

        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)

        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name

            })
        }
    })
}

module.exports = geocode