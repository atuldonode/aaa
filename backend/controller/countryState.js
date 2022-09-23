import country from "../models/country.js";
import countries from "../data/countries.js";
import state from "../data/state.js";
import fetch from "node-fetch";

export const getCountries = async (req, res) => {
    try {
        res.send(countries);

    } catch (error) {
        console.log(error);
        res.send(error)
    }
};

export const getStates = async (req, res) => {
    try {
        fetch("https://api.countrystatecity.in/v1/countries/IN/states")
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    } catch (error) {
        console.log(error);
        res.send(error)
    }
};


// import { Country, State, City }  from 'country-state-city';

// let countrys = Country.getAllCountries();

// console.log(countrys[0].name);
// console.log(State.getAllStates({countryCode:"NE"}))
