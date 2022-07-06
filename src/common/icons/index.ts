import { SearchIcon } from "./search";
import { ArrowDownIcon } from "./arrow-down";
import { BitcoinIcon } from "./bitcoin";
import { DollarIcon } from "./dollar";

export type ListIcons = "dollar" | "bitcoin" | "arrow-down" | "search";

export interface IIcon {
  size?: number;
  fill?: string;
}

export const Icons: Record<ListIcons, React.FC<IIcon>> = {
  dollar: DollarIcon,
  bitcoin: BitcoinIcon,
  "arrow-down": ArrowDownIcon,
  search: SearchIcon,
};
