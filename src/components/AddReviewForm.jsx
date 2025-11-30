import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

function AddReviewForm() {
  const [starHover, setStarHover] = useState(0);
  const [starClick, setStarClick] = useState(0);
  function handleStars() {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={` cursor-pointer duration-300 ${
            starHover >= i || starClick >= i ? "text-gray-500" : "text-gray-300"
          }`}
          onMouseEnter={() => setStarHover(i)}
          onMouseLeave={() => setStarHover(0)}
          onClick={() => setStarClick(i)}
        />
      );
    }
    return stars;
  }
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl">Add a review</h1>
      <form className="bg-gray-200 p-8" onSubmit={(e) => e.preventDefault()}>
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="rating">
                Your rating<span className="text-red-600 text-xl"> *</span>
              </FieldLabel>
              <div className="flex gap-1">{handleStars()}</div>
            </Field>
            <Field>
              <FieldLabel htmlFor="review">
                Your review<span className="text-red-600 text-xl"> *</span>
              </FieldLabel>
              <Textarea id="review" autoComplete="off" className="bg-gray-50" />
            </Field>
            <Field>
              <FieldLabel htmlFor="name">
                Full name<span className="text-red-600 text-xl"> *</span>
              </FieldLabel>
              <Input id="name" autoComplete="off" className="bg-gray-50" />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">
                Email <span className="text-red-600 text-xl"> *</span>
              </FieldLabel>
              <Input id="email" autoComplete className="bg-gray-50" />
            </Field>
          </FieldGroup>
          <FieldGroup>
            <Field orientation="horizontal">
              <Checkbox id="checkbox" className="bg-gray-50" />
              <FieldLabel htmlFor="checkbox">
                Save my name, email, and website in this browser for the next
                time I comment.
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
        <Button type="submit" className="mt-5 bg-blue cursor-pointer">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default AddReviewForm;
