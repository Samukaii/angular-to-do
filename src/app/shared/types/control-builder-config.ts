import { ValidatorFn, AsyncValidatorFn, FormControlState } from "@angular/forms";

type ValidatorConfig = ValidatorFn | AsyncValidatorFn | ValidatorFn[] | AsyncValidatorFn[];

export type ControlBuilderConfig<T> = Array<T | FormControlState<T> | ValidatorConfig>;
