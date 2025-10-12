import { BasicTableDemo } from "../BasicTableDemo";
import { CustomButton } from "../customecomponents/CustomButton";
import DropDownDemo from "../DropDownDemo";
import FetchDummyData from "../FetchDummyData";
import { Timer } from "../TimerDemo";
import { ExpensiveComponent } from "../UseMemoDemo";
import UseReducerDemo from "../UseReduerDemo";
import { useWindowHeight } from "../useWindowHeight";
import { useWindowheightAndWidth } from "../useWindowheightAndWidth";
import { useWindowWidth } from "../useWindowWidth";
import { ProductImage } from "./ProductImage";
export const ProductCard = ({ product }) => {
  console.log(product);
  //   const height = useWindowHeight();
  //   const widht = useWindowWidth();
  const { height, width } = useWindowheightAndWidth();
  console.log(
    `the window size is : widht => ${width} and height is => ${height}`
  );

  function handleClick(e) {
    e.preventDefault();
    alert("custom button Click");
  }
  return (
    <div>
      <h1>{product.name}</h1>
      <ProductImage src={product?.imageUrl} alt={product.name} />
      <CustomButton onClick={handleClick} latel={"Click Me"} />

      {/* <FetchDummyData /> */}

      {/* <BasicTableDemo /> */}

      <DropDownDemo />
      <Timer />
      <UseReducerDemo />
      <ExpensiveComponent numbers={[1, 2, 3, 4, 5]} />
    </div>
  );
};
