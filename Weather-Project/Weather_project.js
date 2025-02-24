
let targetLocation ='japan'
const fetchData = async (targetLocation)=>{
    let url = `http://api.weatherapi.com/v1/current.json?key=1f5fd1a5325243cdb59155528252302&q=${targetLocation}&aqi=no`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    const locationName = data.location.name;
    console.log(locationName);
    const LocationName = document.querySelector('#locationName');
    LocationName.innerHTML=`
    <p>${locationName}</p>
    `
    const localTime = data.location.localtime;
    const time = document.querySelector('#time');
    time.innerHTML=`
    <p>${localTime}</p>
    `
    const localCondition= data.current.condition.text;
    const condition = document.querySelector('#condition');
    condition.innerHTML= `
    <p>${localCondition}</p>
    ` 
    const temper = data.current.temp_c;
    const temperate = document.querySelector('#temperate');
    temperate.innerHTML =`
    <p>${temper}</p>
    `
    function searchLocation(e){
        e.preventDefault();
        targetLocation= searchField.value;
        fetchData(targetLocation);
    }
    const inputValue = ()=>{
        const search = document.querySelector('#search')
        let searchValue = search.value;
        targetLocation = searchValue;
        fetchData(targetLocation);
        search.value="";
        search.placeholder ="Search Country";
    }
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', inputValue);
}
fetchData(targetLocation);

