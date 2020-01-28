const commandDB = [
    {
        id: 1,
        searchPhrase: [ /^Add (.*) to my todo on (.*)/i, /^Add (.*) to my todo/i],
        name: "Add Todo",
        function: AddTodoFunc
    },
    {
        id: 2,
        searchPhrase: [/^Remove (.*) from my todo/i],
        name: "Remove Todo",
        function: removeFromTodoFunc
    },
    {
        id: 3,
        searchPhrase: [ /^What is on my todo (.*)/i, /^What is on my todo/i],
        name: "List Todos",
        function: listTodoFunc
    },
    {
        id: 4,
        searchPhrase: [ /^Who am I/i, /^What is my name/i, /^Who you are talking to/i],
        name: "My Name",
        function: sayMyNameFunc
    },
    {
        id: 5,
        searchPhrase: [ /^Hello my name is (.*)/i, /^My name is (.*)/i],
        name: "Take Name",
        function: takeNameFunc
    },
    {
        id: 6,
        searchPhrase: [ /^What is ([0-9]*) ([\+|\*|\/|\-]) ([0-9]*)/i],
        name: "Calculate",
        function: calcFunc
    },
    {
        id: 7,
        searchPhrase: [ /^my favorite food is (.*)/i, /^My favorite dish is (.*)/i],
        name: "Take Food",
        function: takeFoodFunc
    },
    {
        id: 8,
        searchPhrase:[/^what is my favorite food/i,/^what is my favorite dish/i],
        function: sayMyFavoriteFoodFunc
    },
    {
        id: 9,
        searchPhrase: [/^set a timer for ([0-9]*) (minute|hour|second)s?/i],
        function: setATimer
                 
        },
    {
        id: 10,
        searchPhrase: [/^What day is it today/i],
        function: askDateFunc
    },
    {
        id: 11,
        searchPhrase:[/^add (.*) the (.*) to my calendar/i],
        function: addToCalendar
    },
    {
        id: 12,
        searchPhrase: [/^What am I doing this week?/i, /^What is on my calendar this week?/i],
        function : whatIsUp
    },
    {
        id: 13,
        searchPhrase:[/^can you tell a joke/],
        function: letsSmile
    }
    
]

const jokes=[`Q: How do you get the code for the bank vault?
    A: You checkout their branch.`,
    `Q: How did the developer announce their engagement?
    A: They returned true!`,
    `Q: Why did the security conscious engineer refuse to pay their dinner bill?
    A: Because they could not verify the checksum.`,
    `Q: What do you call a busy waiter?
    A: A server.`,
    `Q: What do you call an idle server?
    A: A waiter.`]

function letsSmile(){
    let index = parseInt(Math.random()*(jokes.length-1));
    let yourJoke = jokes[index];

    return yourJoke;

}    

function whatIsUp() {
    let date = new Date();
    date.setDate(date.getDate()+7);
    let today = new Date();
    let weekActivity = activityDB.filter(i=>i.activityTime < date && i.activityTime > today);
    let weekActivityList = weekActivity.map(i=>i.activity +" the " + getHumanReadableDate(i.activityTime)).join(" and ");
    let activityCount = weekActivity.length;
    return `This week you have ${activityCount} event: ${weekActivityList}`
    }

let activityDB = [];
function addToCalendar(args){
    let activity = args[0];
    let activityTime = args[1];
    activityTime = new Date(activityTime);
    let activityPlan = {};
    activityPlan = {
        activity,
        activityTime
    }
    activityDB.push(activityPlan);
    return `Your task has been added to your calender`
}

function getHumanReadableDate(date){ 
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
    return `${date.getDate()} of ${monthNames[date.getMonth()] } ${date.getFullYear()}`
}

function askDateFunc() {
    let today = new Date();
    return `today is ${getHumanReadableDate(today)}`
}


function timeOut(){
    console.log('time is up')
}

function setATimer(args){
    let time = args[0];
    time = parseInt(time);
    let unit = args[1];
    if(unit === "minute"){
        time = time * 60;
    }
    if(unit === "hour"){
        time = time * 3600;
    }
    setTimeout(timeOut, time * 1000)
    return `timer has been set`
}




function calcFunc(args){
    if(args.length<3){
        return "Can not do anything";
    }
    let first = parseInt(args[0]);
    let op = args[1];
    let second = parseInt(args[2]);

    if(op=="+"){
        return first+second
    }
    if(op=="*"){
        return first*second
    }
    if(op=="-"){
        return first-second
    }
    if(op=="/"){
        if(second===0){
            return "Are you insane?"
        }
        return first/second
    }

}


let items = [];
let myName = null;
function takeNameFunc(args) {
    let foundName = args[0];
    if (myName === foundName) {
        return `Wellcome back ${myName}`
    }
    
    myName = foundName;
    return `Nice to meet you ${myName}`
}

function sayMyNameFunc(){
    if(myName){
        let responses = [myName, `You should be ${myName}`, `great and almighty, ${myName}`]
        return responses[parseInt(Math.random()*(responses.length-1))];
    }

    return "You haven't told me your name yet"
}

const maxDate = new Date(8640000000000000);
const minDate = new Date(-8640000000000000);

function listTodoFunc(args) {
    let date = maxDate;
    if(args.length > 0){
        let till = args[0];
        date = new Date();
        if(till==="today"){
            date.setDate(date.getDate()+1);
        } else if(till=="this week"){
            date.setDate(date.getDate()+7);
        } else{
            return "I didn't quite undrestand till when"
        }
    }
    const filteredItems = items.filter(i=>i.date<date);
    const result = filteredItems.map(i=>`${i.item} on ${i.date.toDateString()}`).join(' and ')
    
    if(result === ""){
        return "you have nothing on your todo list"
    }
    return `you have ${result} on your todo list`
}

function AddTodoFunc(args) {
    let item = args[0];
    let date = args.length > 1 ? new Date(args[1]) : new Date();
    items.push({item,date})
    
    return `${item} has successfully been added to your todo list`
}

function removeFromTodoFunc(args){
    let item = args[0];
    let resultToRemove = -1;
    for (let index = 0; index < items.length; index++) {
        if(item ===items[index].item){
            resultToRemove = index;
            break;
        };
        
    }
    if (resultToRemove > -1) {
        items.splice(resultToRemove,1)
        
        return `${item} has successfully been removed from your todo list`
        
    } else {
        return `Cannot find ${item} in your todo list`
    }

}

let myFavoriteFood = null;
function takeFoodFunc(args) {
    let foundFavoriteFood = args[0];
    myFavoriteFood = foundFavoriteFood;
    return `I'll remember your favorite food is ${myFavoriteFood}`
}

function sayMyFavoriteFoodFunc() {
    if (myFavoriteFood) {
        return `You told me your favorite food is ${myFavoriteFood}`;
    } else{
        return "You haven't told me your that yet"
    }
    
}



function regexFinder(command,regex){
    let found = regex.exec(command)
    if(found && found.length > 0){
        found.shift();
        return found;
    }
    return null;
}

function getReply(command){
    for(let i=0;i<commandDB.length;i++){
        for(let j=0;j<commandDB[i].searchPhrase.length;j++){
            let found = regexFinder(command, commandDB[i].searchPhrase[j]);
            if(found){
                return commandDB[i].function(found);
            }
        }
    }
}

command = "What is my name";
console.log(getReply(command));

command = "Hello my name is Masi";
console.log(getReply(command));

command = "My name is Masi";
console.log(getReply(command));

command = "Who am I";
console.log(getReply(command));

command = "Add jumping up and down to my todo on 27 dec 2019";
console.log(getReply(command));

command = "Add fishing to my todo";
console.log(getReply(command));

command = "Add wandering in streets to my todo";
console.log(getReply(command));

command = "Add sleeping to my todo on 27 dec 2020";
console.log(getReply(command));

command = "Remove fishing from my todo";
console.log(getReply(command));

command = "Remove walking my dog from my todo";
console.log(getReply(command));

command = "What is on my todo";
console.log(getReply(command));

command = "What is on my todo today";
console.log(getReply(command));

command = "What is 5 + 5";
console.log(getReply(command));

command = "What is 5 / 0";
console.log(getReply(command));

command = "My favorite food is lasagne";
console.log(getReply(command));

command = "What is my favorite food?"
console.log(getReply(command));

command = "set a timer for 10 seconds";
console.log(getReply(command));

command = "what day is it today";
console.log(getReply(command));

command = "Add Bike ride the 12/01/2019 to my calendar";
console.log(getReply(command));

command = "What am I doing this week?";
console.log(getReply(command));

command = "can you tell a joke";
console.log(getReply(command));

console.log("done")
