
type CardItemsProps = {
  size?: "sm" | "lg",
  title: string,
  smallTitle: string,
  price: number,
  icon1: JSX.Element,
  icon2: JSX.Element,
  actionPrimary: (event?: string) => void,
  actionSecondary: (event?: string) => void,
  actionPrimaryType: string,
  actionSecondaryType: string,
};

const CardItem = ({
  size = "sm",
  title,
  smallTitle,
  price,
  icon1,
  icon2,
  actionPrimaryType,
  actionSecondaryType,
  actionPrimary,
  actionSecondary,
}: CardItemsProps) => {
  
  const cardStyle = {
    width: size === "sm" ? "200px" : "300px",
    height: size === "sm" ? "300px" : "400px",
  };

  

  return (
    <div style={cardStyle} className="rounded-lg flex flex-col gap-2 shadow-lg p-4">
      <div className="image-container bg-gray-200 h-full rounded-t-lg">

      </div>
      <div className="flex flex-col gap-1 mt-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <h3 className="text-md text-gray-500">{smallTitle}</h3>
      </div>
      <div className="flex flex-row justify-between items-center mt-auto">
        <h3 className="text-lg font-semibold">${price}</h3>
        <div className="flex flex-row gap-2">
          <span onClick={() => actionPrimary(actionPrimaryType)}>{icon1}</span>
          <span onClick={() => actionSecondary(actionSecondaryType)}>{icon2}</span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
