const fs = require('fs');


const characterChecker = str => {
    if (str.length === 0) {
        return 0
    }
    let characterMaker = str.split("");
    let evaluateLength = str.length;
    let upperCaseAmount = characterMaker.filter(x => x == x.toUpperCase());
    let percentageOfUpperCase = upperCaseAmount.length * 100 / evaluateLength;
    return percentageOfUpperCase
}

class Email {
    constructor(subject, body) {
        this.subject = subject;
        this.body = body;
    }
}

class SpamDetector {
    constructor(extraWords, extraRules) {
        this.rules = [
            {
                name: "bad word checker",
                func: this.checkForBadWords
            },
            {
                name: "upper case checker",
                func: this.evaluateUpperCaseChar
            }, {
                name: "subject should not be hello",
                context: "subject",
                func: (str) => str.toLowerCase() === "hello"
            }, {
                name: "empty string",
                priority: 0,
                func: (str) => (!str || str.length === 0)

            }
        ];
        this.rules = [...this.rules, ...extraRules.map(f => {
            return {
                name: "user defined rules",
                func: f
            }
        })]
        this.badWords = ["viagra", "free", "offer", "business proposal"];
        this.badWords = [...this.badWords, ...extraWords];
    }

    evaluateUpperCaseChar(str) {

        if (characterChecker(str) >= 60) {
            return true
        }
    }

    checkForBadWords(str, self) {

        return self.badWords.some(word =>
            str.toLowerCase().includes(word)
        )
    }

    ruleChecker(email, context, property) {
        let self = this;
        let res = this.rules
            .filter(rule => !rule.context || rule.context === context)
            .sort((a, b) => 
            (a.priority === undefined ? Infinity : a.priority)  
            > (b.priority === undefined ? Infinity : b.priority) ? 1 : -1)
            .find(rule =>
                rule.func(email[property], self));
        return res ? res.name || "Unknown Rule" : null;

    }


    isSpam(email, shouldProvideReason) {
        let res = this.ruleChecker(email, "subject", "subject")
        if (res) {
            return shouldProvideReason ? res : true
        }
        res = this.ruleChecker(email, "body", "body")
        if (res) {
            return shouldProvideReason ? res : true
        }
        return shouldProvideReason ? null : false
    }

}

const spamDetector = new SpamDetector(["ویاگرا"], [f => f.length > 40000]);


const buildResult= result=>{
    if(result){
        return `email is spam because ${result}`
    }
}

const emailSampleDB =JSON.parse(fs.readFileSync(__dirname+"/email.json"));
const emails = emailSampleDB.map(email =>new Email(email.subject,email.content))

const isSpamResult = emails.map(email =>spamDetector.isSpam(email,true))
console.log(isSpamResult.map(buildResult).filter(f=>f))
