export interface ConfigValidator {
	[key: string]: string;
}

export interface ValidationResult {
	valid: boolean;
	messages: string[];
}

export interface ValidatorStrategy {
	validate(value: string): boolean;
	message: string;
}