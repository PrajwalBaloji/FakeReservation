export const isLoggedIn=()=>{
    console.log('isLoggedIn',localStorage.getItem('isLoggedIn')===true ? true : false);
    return localStorage.getItem('isLoggedIn')
}

export const logout=()=>{
    localStorage.removeItem('isLoggedIn')
    window.location.reload()
}

export const isValidEmail=(val)=>{
    if(!val) return false
    const emailpattern=new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if(!emailpattern.test(val)) return true
    return false

}

export const getRouteName=(vals)=>{
    switch(vals) {
        case '/': return 'Dashboard'
        case'/planjourney' : return 'Plan Journey Page'
    }
}