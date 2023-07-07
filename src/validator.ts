import { ConfigValidator, ValidationResult } from "./interfaces";
import { ValidatorSelector } from "./validate-selector";

export class Validator {
	constructor (private config: ConfigValidator) {
		ValidatorSelector.initialize();
	}

	validate(data: Record<string, unknown>): ValidationResult {
		const messages: string[] = [];

		const keys: string[] = Object.keys(data);

		keys.forEach(key => {
			const validateName = this.config[key];

			if (!validateName) return;

			const validator = ValidatorSelector.select(validateName);

			const validateValue = String(data[key]);

			const isValid = validator.validate(validateValue);

			if (!isValid) {
				const message = `Do not right value for ${key}: ${data[key]} - ${validator.message}`;

				messages.push(message);
			}
		});

		return {
			valid: !messages.length,
			messages
		}
	}
}

