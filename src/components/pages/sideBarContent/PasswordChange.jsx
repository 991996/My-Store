import { Button } from "@/components/ui/button";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

function PasswordChange() {
  return (
    <>
      <div className="flex flex-col gap-5 md:gap-8 border-2 p-10">
        <h1 className="font-bold text-lg uppercase">Password change</h1>

        <form className="max-w-4xl text-gray-500">
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel>
                  Current Password (leave blank to leave unchanged)
                </FieldLabel>
                <Input type="text" autoComplete="off" />
              </Field>
              <Field>
                <FieldLabel>
                  New Password (leave blank to leave unchanged)
                </FieldLabel>
                <Input type="text" autoComplete="off" />
              </Field>

              <Field>
                <FieldLabel>Confirm New Password</FieldLabel>
                <Input type="text" autoComplete="off" />
              </Field>
            </FieldGroup>
          </FieldSet>
        </form>
      </div>
      <Button className=" self-start uppercase font-bold rounded-none p-7 text-[17px] tracking-wider cursor-pointer">
        save changes
      </Button>
    </>
  );
}

export default PasswordChange;
