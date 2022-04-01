import axios from 'axios';

//Authed
let authClient = axios.create({});
authClient.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
authClient.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');;


// NoneAuthed
let client = axios.create({});
client.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
client.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');;


export {
    authClient,
    client
}
