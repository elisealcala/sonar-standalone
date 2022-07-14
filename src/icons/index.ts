import { SearchIcon } from "./search";
import { ArrowDownIcon } from "./arrow-down";
import { CaretDownIcon } from "./caret-down";
import { BitcoinIcon } from "./bitcoin";
import { DollarIcon } from "./dollar";

export interface IIcon {
  size?: number;
  fill?: string;
}

export const Icons: Record<string, React.FC<IIcon>> = {
  dollar: DollarIcon,
  bitcoin: BitcoinIcon,
  "caret-down": CaretDownIcon,
  search: SearchIcon,
  "arrow-down": ArrowDownIcon,
};
