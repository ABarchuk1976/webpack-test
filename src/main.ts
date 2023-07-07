import { ConfigValidator } from "./interfaces";
import { Validator } from "./validator";

const dataValid = {
	fullName: 'Andrii Barchuk',
	age: 47,
	email: 'abarchuk1976@gmail.com'
}

const dataInvalid = {
	fullName: '',
	age: "47p",
	email: 'abarchuk1976.gmail.com'
}

const config: ConfigValidator = {
	fullName: 'required',
	email: 'email',
	age: 'number',
};

function run() {
	const validator = new Validator(config);

	let validationResult = validator.validate(dataValid);

	console.log(validationResult.valid, validationResult.messages);

	validationResult = validator.validate(dataInvalid);

	console.log(validationResult.valid, validationResult.messages);
}

run();