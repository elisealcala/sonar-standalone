import { FC } from "react";
import Text from "../../text";
import "./token-item.css";

interface ITokenItemProps {
  image: string;
  mainText: string;
  secondaryText?: string;
}

export const TokenItem: FC<ITokenItemProps> = ({
  image,
  mainText,
  secondaryText,
}) => {
  return (
    <div className="token-item-container">
      <div className="main-text">
        <img src={image} alt={mainText} />
        <Text>{mainText}</Text>
      </div>
      {secondaryText ? (
        <Text className="secondary-text">{secondaryText}</Text>
      ) : null}
    </div>
  );
};
