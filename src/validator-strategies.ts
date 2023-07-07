import { ValidatorStrategy } from "./interfaces";

export class RequiredValidator implements ValidatorStrategy {
	validate(value: string): boolean {
			return !!value;
	}

	message: string = "Required value.";
}

export class NumberValidator implements ValidatorStrategy {
	validate(value: string): boolean {
			return !!+value;
	}

	message: string = "Value must be a number.";
}

export class EmailValidator implements ValidatorStrategy {
	validate(value: string): boolean {
			return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test (value);
	}

	message: string = "Value must be an email formatted.";
}