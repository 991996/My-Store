import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { Eye, EyeClosed } from "lucide-react";

function SignUp() {
  const { signUp } = useContext(AuthContext);
  const [newUser, setNewUser] = useState({
    id: uuidv4(),
    username: "",
    email: "",
    password: "",
    country: "",
  });
  const [error, setError] = useState("");
  const [passwordHidden, setPasswordHidden] = useState(true);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="flex flex-col p-10 bg-mustard/30 rounded-2xl shadow-2xl w-[80%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%]"
        onSubmit={(e) => {
          e.preventDefault();
          const result = signUp(newUser);
          console.log(result.error);
          if (result.error) setError(result.error);
          //if (error !== true) alert(error);
        }}
      >
        <Logo />
        <div className="py-5">
          <h1 className="font-bold text-2xl">Register</h1>
          <div className="flex gap-0 items-center">
            <p className="text-sm text-gray-500">You have an account?</p>
            <Link to="/login">
              <Button
                variant="link"
                className="cursor-pointer text-xs text-blue-800"
              >
                Login Now
              </Button>
            </Link>
          </div>
        </div>

        <FieldSet>
          <FieldGroup>
            <FieldDescription
              className={`${error ? "block" : "hidden"} text-red-600 text-sm`}
            >
              {error}
            </FieldDescription>
            <Field>
              <FieldLabel htmlFor="email">
                Email<span className="text-red-600 text-xl"> *</span>
              </FieldLabel>
              <Input
                id="email"
                type="text"
                required
                className="bg-gray-50"
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="username">
                Username<span className="text-red-600 text-xl"> *</span>
              </FieldLabel>
              <Input
                id="username"
                type="text"
                required
                className="bg-gray-50"
                value={newUser.username}
                onChange={(e) =>
                  setNewUser({ ...newUser, username: e.target.value })
                }
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">
                Password<span className="text-red-600 text-xl"> *</span>
              </FieldLabel>
              <FieldDescription className="text-xs">
                Must be at least 8 characters long.
              </FieldDescription>
              <div className="relative">
                <Button
                  type="button"
                  className="absolute right-2 bg-transparent text-gray-300 cursor-pointer hover:bg-transparent"
                  onClick={() => setPasswordHidden(!passwordHidden)}
                >
                  {passwordHidden ? <Eye /> : <EyeClosed />}
                </Button>

                <Input
                  id="password"
                  type={passwordHidden ? "password" : "text"}
                  required
                  className="bg-gray-50"
                  value={newUser.password}
                  onChange={(e) =>
                    setNewUser({ ...newUser, password: e.target.value })
                  }
                />
              </div>
            </Field>
          </FieldGroup>
        </FieldSet>
        <Button type="Submit" className="bg-blue mt-5 cursor-pointer">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
