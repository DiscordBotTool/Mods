module.exports = {
    //This is what will be shown inside Discord Bot Tool
    name: "Your mod name here",

    //Place the mods authors here, you can add other authors like this: ["user", "user2"]
    author: ["AUTHOR NAME HERE"],

    //Place the description of this mod here
    description: "Official Mod",

    //Place the verison of this mod here
    version: "1.0.0",

    //Category the mod can be found in
    category: "Mods",

    //Your outputs, leave it like this for default settings
    outputs: ["Next"],

    //Place the HTML to show inside of Discord Bot Agent
    html: function (insert) {
        return `
        <label>Your Input</label>
        <input name="inputName">
        ${insert} <!-- This is the insert variable button, put it below the input to insert into that input! --!>
        `;
    },
    startup: function (DBT) {
        console.log("Example Mod by Discord Bot Tool");
    },

    execute: async function (DBT, action, index, message, args, command) {
        console.log(DBT.parseVariables(action.inputName));

        DBT.nextResponse(message, args, command, "Next"); //Next is the output name
    },
};
