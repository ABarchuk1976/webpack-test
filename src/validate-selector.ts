import { ValidatorStrategy } from "./interfaces";
import { EmailValidator, NumberValidator, RequiredValidator } from "./validator-strategies";

export class ValidatorSelector {
	private static validators: {[id: string]: ValidatorStrategy} = {}

	static initialize () {
		ValidatorSelector.validators['required'] = new RequiredValidator;
		ValidatorSelector.validators['number'] = new NumberValidator;
		ValidatorSelector.validators['email'] = new EmailValidator;

		ValidatorSelector.initialize = () => {};
	}

	static select(name: string) {
		const validator = ValidatorSelector.validators[name];

		if (!validator) {
			throw new Error('Do not find validator ' + name);
		}
		
		return validator; 
	} 
}