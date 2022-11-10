import { FormControl } from "@angular/forms";

export interface FormDropdownSearchable {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  city: FormControl<string>;
  provice: FormControl<string>;
}

export const Cities = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo"];
