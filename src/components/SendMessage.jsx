import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

function SendMessage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Send Us a Message</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">
                Your name<span className="text-red-600 text-xl"> *</span>
              </FieldLabel>
              <Input id="name" autoComplete="off" className="bg-gray-50" />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">
                Your E-mail <span className="text-red-600 text-xl"> *</span>
              </FieldLabel>
              <Input id="email" autoComplete className="bg-gray-50" />
            </Field>
            <Field>
              <FieldLabel htmlFor="review">
                Your Message<span className="text-red-600 text-xl"> *</span>
              </FieldLabel>
              <Textarea id="review" autoComplete="off" className="bg-gray-50" />
            </Field>
          </FieldGroup>
        </FieldSet>
        <Button
          type="submit"
          className="py-6 mt-5 cursor-pointer rounded-none uppercase text-[13px]"
        >
          Send massage
        </Button>
      </form>
    </div>
  );
}

export default SendMessage;
