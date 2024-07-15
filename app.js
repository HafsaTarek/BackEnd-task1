const yargs=require("yargs")
const studData=require("./studData.js")

yargs.command({
    command:"add",
    describe:"Add student data",
    builder:{
        fname:{
            describe:"Your first name",
            demandOption:true,
            type:"string"
        },
        lname:{
            describe:"Your last name",
            demandOption:true,
            type:"string"
        }
    },
    handler:(x)=>{
        studData.addStudent(x.id,x.fname,x.lname,x.city,x.age)
    }
})

yargs.parse();

yargs.command({
    command:"delete",
    describe:"Delete student data with the specified ID",
    builder:{
        id:{
            describe:"Your ID",
            demandOption:true,
            type:"number"
        }
    },
    handler:(x)=>{
        studData.deleteStud(x.id)
    }
})

yargs.parse();

yargs.command({
    command:"display",
    describe:"Display student data with the specified ID",
    builder:{
        id:{
            describe:"Your ID",
            demandOption:true,
            type:"number"
        }
    },
    handler:(x)=>{
        studData.displayData(x.id)
    }
})

yargs.parse();


yargs.command({
    command:"filter",
    describe:"Display all students' data",
    handler:(x)=>{
        studData.filter()
    }
})

yargs.parse();



