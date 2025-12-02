import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldDescription,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { Checkbox } from "../ui/checkbox";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo";
import { Eye, EyeClosed } from "lucide-react";

function Login() {
  const { login } = useContext(AuthContext);
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [passwordHidden, setPasswordHidden] = useState(true);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="flex flex-col p-10 bg-cherry-blossom/30 rounded-2xl shadow-2xl w-[80%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%]"
        onSubmit={(e) => {
          e.preventDefault();
          const result = login(newUser.email, newUser.password);
          if (result.error) setError(result.error);
          else if (result.success) navigate("/");
        }}
      >
        <Logo />
        <div className="py-5">
          <h1 className="font-bold text-2xl">Login</h1>
          <div className="flex gap-0 items-center">
            <p className="text-sm text-gray-500">You don't have an account?</p>
            <Link to="/signup">
              <Button
                variant="link"
                className="cursor-pointer text-xs text-blue-800"
              >
                Register Now
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
                Username or email address
                <span className="text-red-600 text-xl"> *</span>
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
              <FieldLabel htmlFor="password">
                Password<span className="text-red-600 text-xl"> *</span>
              </FieldLabel>
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
            <div className="flex justify-between">
              <Field orientation="horizontal">
                <Checkbox id="checkbox" className="bg-gray-50" />
                <FieldLabel htmlFor="checkbox">Remember me.</FieldLabel>
              </Field>

              <Button variant="link" className="cursor-pointer text-[13px]">
                Forgot Password?
              </Button>
            </div>
          </FieldGroup>
        </FieldSet>
        <Button type="Submit" className="bg-blue mt-10 cursor-pointer">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Login;
