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
 * Renders an input element and, when provided, displays an inline error message.
 *
 * @param props - Props for the input element, including standard input attributes and an optional `error` message
 * @returns A JSX element containing the input and an error paragraph when `error` is present
 */
export function Input(props: BaseInputProps) {
  const { error, ...rest } = props;

  return (
    <div>
      <input {...rest} />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

/**
 * Renders a controlled textarea element and displays an inline validation error when provided.
 *
 * @param props - Props for the textarea; includes standard input props and an optional `error` string that, when present, is shown below the textarea.
 * @returns A JSX element containing the textarea and, if `error` is provided, a paragraph with the error message.
 */
export function Textarea(props: BaseInputProps) {
  const { error, ...rest } = props;

  return (
    <div>
      <textarea {...rest} />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
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
 * Renders an input field prefixed by a fixed label and displays an optional validation error below it.
 *
 * @param prefix - Text shown as the non-editable prefix to the left of the input
 * @param name - The input's name attribute
 * @param placeholder - Placeholder text for the input
 * @param value - Controlled value of the input
 * @param error - Optional error message to display below the input
 * @param onChange - Change event handler for the input
 * @param containerClass - CSS class applied to the wrapper that contains the prefix and input
 * @returns A JSX element containing the prefixed input and, when `error` is present, an error message
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
          className="flex-1 outline-none bg-transparent px-3 py-3 min-w-0 text-sm"
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
