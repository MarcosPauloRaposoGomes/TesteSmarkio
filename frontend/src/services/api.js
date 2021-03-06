//Calling the API
import {URL} from './servicesURL'

// Interfacing the backend with Remote Request (which would be the test's AJAX) 
export default class Api {
    
    //Create Comment Function
    static async createComment(body) {
        try {
          const res = await fetch(URL + '/createComment', body, {
              method: 'POST'
          })  
          return res;
        } 
        catch (error) {
            return error;
        }
    }

    //Get All Comments Function
    static async getAllComments() {
        try {
          const res = await fetch(URL + '/listComments', {
              method: 'GET'
          })  
          return res;
        } 
        catch (error) {
            return error;
        }
    }

    //Audio Player Function
    static async listenAudio() {
        try {
            const res = await fetch(URL + '/textToSpeech', {
                method: 'GET'
            })  
            return res;
          } 
          catch (error) {
              return error;
          }

    }

}