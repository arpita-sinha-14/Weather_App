
const temperatureField = document.querySelector(".temperature")
const locationField = document.querySelector(".location p")
const dateandtimeField = document.querySelector(".location span")
const conditionField = document.querySelector(".weather_condition span")
// const iconField = document.querySelector(".weather_condition p")
const searchField = document.querySelector(".srch")
const form = document.querySelector("form")


form.addEventListener('submit', searchForLocation)




let target = 'Gaya'

const fetchresults = async (targetlocation) =>
{
    let url = `http://api.weatherapi.com/v1/current.json?key=8bbadb1273b64d40abb174558252306&q=${targetlocation}&aqi=no`

    const res = await fetch(url)
    

    const data = await res.json()

    console.log(data)

    let locationName = data.location.name
    let time = data.location.localtime
    let temp = data.current.temp_c
    // let conditionicon = data.current.condition.icon


    let condition = data.current.condition.text
    updateDetails(temp , locationName , time , condition )

}


function updateDetails(temp, locationName , time , condition )
{
// let splitDate = time.spilt(" ")[0];
// let splitTime = time.split(" ")[1];

// let currentDay = getDayName(new Date(splitDate).getDay())

    temperatureField.innerText = temp
    locationField.innerText = locationName
    dateandtimeField.innerText = time
    // `${splitDate} ${currentDay} ${splitTime}`
    conditionField.innerText = condition
    // iconField.innerText = icon
    

}

function searchForLocation(e)
{
    e.preventDefault()

    target = searchField.value
    fetchresults(target)
}

function getDayName(number)
{
    switch(number)
    {
        case 0:
            return 'Sunday'
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
    }
}

fetchresults(target)


