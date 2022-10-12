// var a = [9, 8, 7, 5];

// console.log(a.indexOf(7));

// if (a.indexOf('7') == -1){
//     console.log('yes!');
// } else{
//     console.log('no!')
// }

// var people = [
//     { name : 'Джонатан' , age : 22},
//     { name : 'Джoзеф' , age : 22},
//     { name : 'Джотаро' , age : 22},
//     { name : 'Джосукэ' , age : 22},
//     { name : 'Джолин' , age : 22},
//     { name : 'Джорно' , age : 22}
// ]

// var Jonathan = people.find (person => person.name === 'Джонатан')
// console.log ( Jonathan )

var people = [1,2,'hi',true,false,'name','hi']


// function check(i,arg){
//    if(people[i]===arg){
//         console.log('true')
//    }else{
//     console.log('false')
//    }
// }
// check(3,true)
function check(a){
    for(var e = 0; e < people.length;e++){
        if(people[e]===a){
            console.log('есть')
       }else{
        console.log('нет')
       }
    }
  
}
check('hi')
