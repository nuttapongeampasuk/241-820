function submitData() {
    let firsNameDom = document.querySelector('input[name=firstname]');
    let lastNameDom = document.querySelector('input[name=lastname]');
    let ageDom = document.querySelector('input[name=age]');
    
    let genderDom = document.querySelector('input[name=gender]:checked');
    let interestDoms = document.querySelectorAll('input[name=interest]:checked');

    let discriptionDom = document.querySelector('textarea[name=description]');

    let interests = ''
    for (let i = 0; i < interestDoms.length; i++) {
        interests += interestDoms[i].value
        if (i != interestDoms.length - 1) {
            interests += ', '
        }
    let userData = {
        firstName: firsNameDom.value,
        lastName: lastNameDom.value,
        age: ageDom.value,
        gender: genderDom.value,
        discriptionDom: discriptionDom.value,
    }
console.log('submit Data', userData);
    }
}
