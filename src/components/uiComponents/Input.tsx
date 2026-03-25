type BaseInputProps = {
  name: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  className: string;
};

/**
 * Render an input element wired for accessibility and an optional inline error message.
 *
 * @param props - Props for the input: includes `name`, `placeholder`, `value`, `onChange`, optional `error`, and optional `className`.
 * @returns A JSX element containing the controlled `<input>` with `aria-invalid`/`aria-describedby` set when `error` is present, and a `<p role="alert">` showing the error message when provided.
 */
export function Input(props: BaseInputProps) {
  const { error, name, ...rest } = props;
  const errorId = error ? `${name}-error` : undefined;

  return (
    <div>
      <input
        name={name}
        {...rest}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
      />
      {error && (
        <p id={errorId} role="alert" className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

/**
 * Renders a controlled textarea input with built-in, accessible error display.
 *
 * When `error` is provided, the textarea receives `aria-invalid="true"` and
 * `aria-describedby` pointing to `${name}-error`, and an adjacent `<p role="alert">`
 * is rendered containing the error message.
 *
 * @returns A JSX element containing the textarea and an optional accessible error message.
 */
export function Textarea(props: BaseInputProps) {
  const { error, name, ...rest } = props;
  const errorId = error ? `${name}-error` : undefined;

  return (
    <div>
      <textarea
        name={name}
        {...rest}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
      />
      {error && (
        <p id={errorId} role="alert" className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

type PrefixInputProps = {
  prefix: string;
  name: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  containerClass: string;
};

/**
 * Renders a text input prefixed by a static label and shows an inline error message when provided.
 *
 * The input is a controlled field using `value` and `onChange`, and includes ARIA attributes that mark it as invalid and link it to the error message when present.
 *
 * @returns The JSX element for the prefixed input group with an optional error alert.
 */
export function PrefixInput({
  prefix,
  name,
  placeholder,
  value,
  error,
  onChange,
  containerClass,
}: PrefixInputProps) {
  const errorId = error ? `${name}-error` : undefined;
  return (
    <div>
      <div className={containerClass}>
        <span className="shrink-0 flex items-center bg-gray-50 dark:bg-gray-800 border-r border-gray-300 px-3 text-gray-400 text-xs font-mono select-none whitespace-nowrap">
          {prefix}
        </span>
        <input
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
          className="flex-1 outline-none bg-transparent px-3 py-3 min-w-0 text-sm"
        />
      </div>
      {error && (
        <p id={errorId} role="alert" className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
