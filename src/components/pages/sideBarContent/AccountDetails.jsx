import { UserRound } from "lucide-react";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import PasswordChange from "./PasswordChange";

function AccountDetails() {
  return (
    <div className="flex flex-col gap-5 md:gap-8">
      <div className="flex gap-2 items-center">
        <UserRound size={30} className="text-gray-400" />
        <h1 className="font-bold text-[22px]">Account Details</h1>
      </div>
      <form className="max-w-4xl text-gray-500">
        <FieldSet>
          <FieldGroup>
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel>
                  First name<span className="text-red-600 text-xl"> *</span>
                </FieldLabel>
                <Input type="text" autoComplete="off" />
              </Field>
              <Field>
                <FieldLabel>
                  Last name<span className="text-red-600 text-xl"> *</span>
                </FieldLabel>
                <Input type="text" autoComplete="off" />
              </Field>
            </div>
            <Field>
              <FieldLabel>
                Display name <span className="text-red-600 text-xl"> *</span>
              </FieldLabel>
              <Input type="text" autoComplete="off" />
              <FieldDescription className="text-[13px] md:text-sm">
                This will be how your name will be displayed in the account
                section and in reviews
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="email">
                Email <span className="text-red-600 text-xl"> *</span>
              </FieldLabel>
              <Input type="email" autoComplete />
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
      <PasswordChange />
    </div>
  );
}

export default AccountDetails;
