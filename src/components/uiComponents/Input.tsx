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
 * Render an input element with accessibility wiring and an optional inline error message.
 *
 * When `error` is provided, the input is marked as invalid and associated with an alert paragraph
 * via `aria-describedby`; the error text is rendered in a `<p role="alert">`.
 *
 * @param props - Props for the input. Notable fields:
 *   - `name`: the input's name attribute and used to build the error element id when `error` is present.
 *   - `error`: optional error message to display and expose via ARIA.
 * @returns A JSX element containing the input and, when present, an associated error paragraph.
 */
export function Input(props: BaseInputProps) {
  const { error, name, ...rest } = props;
  const errorId = error
    ? `
  ${name}-error`
    : undefined;

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
 * Renders a textarea input bound to the provided props and shows accessible error messaging when present.
 *
 * When `error` is provided, the component sets `aria-invalid` and `aria-describedby` to an ID derived from `name`
 * and renders a `<p role="alert">` with that ID containing the error text.
 *
 * @returns A textarea element configured with the given props and an optional associated error message element.
 */
export function Textarea(props: BaseInputProps) {
  const { error, name, ...rest } = props;
  const errorId = error
    ? `
  ${name}-error`
    : undefined;

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
 * Renders a text input prefixed by a static label and an optional validation message.
 *
 * The component displays `prefix` to the left of a controlled `<input>` and, when `error` is provided,
 * exposes the error via an element with `role="alert"`, sets `aria-invalid`, and links it with
 * `aria-describedby` for accessibility.
 *
 * @param prefix - Text shown as the fixed prefix to the left of the input
 * @param name - Input `name` attribute used to build the error id when `error` is present
 * @param placeholder - Input placeholder text
 * @param value - Controlled input value
 * @param error - Optional validation message; when present an error paragraph is rendered and referenced by the input
 * @param onChange - Change event handler for the input
 * @param containerClass - CSS class applied to the prefix+input container for layout/styling
 * @returns The rendered prefixed input group with optional error message
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
  const errorId = error
    ? `
  ${name}-error`
    : undefined;
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
