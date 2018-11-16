import $ from 'jquery'

async function getVms() {
    return await $.get('api/vm')
}


export {
    getVms
}
