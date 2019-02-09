'use strict'

import fetch from 'node-fetch';
/**
 * This is where the app calls the microservice responsible for the "Quote" resource type.
 */
export const fetchResponseByURL = () => {
    console.log("chamou a API");
    return fetch('https://reqres.in/api/users?page=2')
        .then(res => res.json())
        .then(json => transform(json))
}


function transform(json) {
    var retorno = json.data[0];

    return {
        id: retorno.id,
        name: retorno.first_name + " " + retorno.last_name,
        avatar: retorno.avatar
    }
}
