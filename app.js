const regex = {
    firstName: /[\w]+/i,
    lastName: /[\w]+/i,
    password: /[\w]{8,20}/i,
    email: /^([a-z\d]+)@([\w]{2,})\.([a-z\d]{2,}\.?([])?)$/,
};

// initialize all inputs as empty

const passwordField = document.querySelector('[type="password"]');
const inputFields = document.querySelectorAll("input");
passwordField.value = "";

inputFields.forEach((input) => {
    input.addEventListener("keyup", validate);
});
function validate() {
    const inputValue = this.value;
    const name = this.attributes.name.value;

    if (inputValue !== "") {
        if (regex[name].test(inputValue)) {
            this.className = "header__input success";
            msgAlert(this,'none');
        } else {
            this.className = "header__input failed";
            msgAlert(this,'block');
        }
    } else {
        this.className = "header__input";
        msgAlert(this,'none');
    }
}


function msgAlert(current,display,){
    current.nextElementSibling.style.display = display;
    current.nextElementSibling.nextElementSibling.style.display = display;
}