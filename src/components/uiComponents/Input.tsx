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
