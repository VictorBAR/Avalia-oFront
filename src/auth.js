const isAuthenticated = () => {
    console.log('aaaa ',sessionStorage.getItem('token'))
    if(sessionStorage.getItem('token') !== undefined && sessionStorage.getItem('token') !== null && sessionStorage.getItem('token') !== ''){
        return true
    }
    return false
}

export default isAuthenticated
