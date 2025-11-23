import { Button } from "@/components/ui/button";

function MyButton({ color, text, textColor }) {
  return (
    <Button
      style={{ backgroundColor: color, color: textColor ? textColor : "white" }}
      className={`uppercase cursor-pointer font-bold rounded-none w-[150px] md:w-[180px] lg:w-[200px] py-5 md:py-6 lg:py-7 
      text-sm md:text-base lg:text-[17px]`}
    >
      {text}
    </Button>
  );
}

export default MyButton;
