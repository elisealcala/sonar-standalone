import { BitcoinIcon } from "./bitcoin";
import { DollarIcon } from "./dollar";

export type ListIcons = "dollar" | "bitcoin";

export interface IIcon {
  size?: number;
  fill?: string;
}

export const Icons: Record<ListIcons, React.FC<IIcon>> = {
  dollar: DollarIcon,
  bitcoin: BitcoinIcon,
};
