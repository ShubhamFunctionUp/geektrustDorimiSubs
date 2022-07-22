const fs = require("fs")

const filename = process.argv[2]
const moment = require('moment');

let Plandetails = {
    MUSIC:{
        FREE:{
            price:0,
            month:1
        },
        PERSONAL:{
            price:100,
            month:1
        },
        PREMIUM:{
            price:250,
            month:3
        }
    },
    VIDEO:{
        FREE:{
            price:0,
            month:1
        },
        PERSONAL:{
            price:200,
            month:1
        },
        PREMIUM:{
            price:500,
            month:3
        }
    },
    PODCAST:{
        FREE:{
            price:0,
            month:1
        },
        PERSONAL:{
            price:100,
            month:1
        },
        PREMIUM:{
            price:300,
            month:3
        }

    }
}

let topUpDetails = {
    FOUR_DEVICES:{
        price:50,
        device:4
    },
    TEN_DEVICE:{
        price:100,
        device:10
    }
}

let subscriptionPlan = {};
let subscriptionPlanlist = []
let totalRate = 0;
let topUpList = []


function main(data){
    let input = data.toString().split("\n")
    for(let i = 0 ;i <input.length;i++){
        if (input) {       
        let inputItem = input[i].split(' ');
        
        if(inputItem[0]=="START_SUBSCRIPTION"){
            additionDate(input[1].trim());
        }else if(inputItem[0]=="ADD_SUBSCRIPTION"){
            subScription(input[1],input[2])
        }else if(inputItem[0]=="ADD_TOPUP "){
            addingTopUp(input[1],input[2])
        }else if(inputItem[0]=="PRINT_RENEWAL_DETAILS"){
            printDetails()
        }
    }
    }
}



fs.readFile(filename, "utf8", (err, data) => {
    /*if (err) throw err
    var inputLines = data.toString().split("\n")
    // Add your code here to process input commands
    */
})
