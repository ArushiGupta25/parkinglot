const parkinglotForm = document.getElementById('parkinglotForm');
const vehicleContainer = document.querySelector('.Vehicle');

const nameInput = parkinglotForm["name"];
const vnameInput = parkinglotForm["vname"];
const numberInput = parkinglotForm["number"];
const entrydateInput = parkinglotForm["entrydate"];
const exitdateInput = parkinglotForm["exitdate"];
const Vehicle = JSON.parse(localStorage.getItem("Vehicle")) || [];
/*
{
    name: '';
    age: number;
    roll: number;
}
*/

const addVehicle = (name,vname,number,entrydate,exitdate) => {
    Vehicle.push({
         name,
         vname,
         number,
        entrydate,
        exitdate

    });
    // to convert an array in a string write JSON.stringify(Vehicle)
    localStorage.setItem("Vehicle",JSON.stringify(Vehicle));
    return{name,vname,number,entrydate,exitdate};
    
};
const createVehicleElement =({name,vname,number,entrydate,exitdate}) => {
    // create elements
    const vehicleDiv = document.createElement('div');
    const Name = document.createElement('h4');
    const vehicleName = document.createElement('p');
    const vehicleNumber = document.createElement('p');
    const EntryDate = document.createElement('p');
    const ExiteDate = document.createElement('p');

    // fill the content
    Name.innerText = "Name: " + name;
    vehicleName.innerText = "Vehicle Name:" + vname;
    vehicleNumber.innerText = "Vehicle Number:"+ number;
    EntryDate.innerText = "Entry Date:"+ entrydate;
    ExiteDate.innerText = "Exit Date :"+ exitdate;

    // add to the DOM
    vehicleDiv.append(Name,vehicleName,vehicleNumber,EntryDate,ExiteDate);
    vehicleContainer.appendChild(vehicleDiv);

    vehicleContainer.style.display = Vehicle.length === 0 ? "none" : "flex";
};

vehicleContainer.style.display = Vehicle.length === 0 ? "none" : "flex";

Vehicle.forEach(createVehicleElement);
parkinglotForm.onsubmit = e => {
    e.preventDefault();
    const newVehicle = addVehicle(
        nameInput.value,
        vnameInput.value,
        numberInput.value,
        entrydateInput.value,
        exitdateInput.value
    )
    createVehicleElement(newVehicle)
    nameInput.value = "";
    vnameInput.value ="";
    numberInput.value="";
    entrydateInput.value="";
    exitdateInput.value = "";
};





