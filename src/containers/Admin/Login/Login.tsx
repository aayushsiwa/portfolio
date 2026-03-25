"use client";
import { useLogin } from "./Login.hooks";

export const Login = () => {
  const { handleLogin, errors, loading } = useLogin();

  /**
   * Builds the Tailwind CSS class string for an input by applying error or default border styles based on validation state.
   *
   * @param name - The input field key used to check for an entry in the `errors` object
   * @returns The composed class string with base input classes and `border-red-500` if the field has an error, otherwise `border-gray-300`
   */
  function inputClass(name: string) {
    return `border p-2 w-full rounded ${
      errors[name] ? "border-red-500" : "border-gray-300"
    }`;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="space-y-4 w-80">
        <h1 className="text-2xl font-semibold">Admin Login</h1>

        {errors.general && (
          <p className="text-red-500 text-sm">{errors.general}</p>
        )}

        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className={inputClass("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className={inputClass("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-4 py-2 w-full rounded disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};
