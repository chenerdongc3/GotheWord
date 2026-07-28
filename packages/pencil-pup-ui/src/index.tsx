"use client";

import React, {
  Children,
  cloneElement,
  createContext,
  forwardRef,
  isValidElement,
  useContext,
  useEffect,
  useId,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export type InkColor =
  | "default"
  | "app-pink"
  | "purple"
  | "app-blue"
  | "app-yellow"
  | "app-orange"
  | "app-teal"
  | "app-green"
  | "app-red"
  | "lime-green"
  | "yellow-green"
  | "brown"
  | "warm-peach-pink";

export type ButtonType = "primary" | "default" | "dashed" | "text" | "link";
export type ButtonSize = "small" | "middle" | "large";
export type ButtonHTMLType = "submit" | "reset" | "button";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type?: ButtonType;
  size?: ButtonSize;
  danger?: boolean;
  ghost?: boolean;
  block?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  htmlType?: ButtonHTMLType;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    type = "default",
    size = "middle",
    danger = false,
    ghost = false,
    block = false,
    loading = false,
    disabled = false,
    icon,
    htmlType = "button",
    className,
    children,
    ...props
  },
  ref,
) {
  return (
    <button
      {...props}
      ref={ref}
      type={htmlType}
      className={cx(
        "pui-button",
        `pui-button--${type}`,
        `pui-button--${size}`,
        danger && "pui-button--danger",
        ghost && "pui-button--ghost",
        block && "pui-button--block",
        loading && "pui-button--loading",
        className,
      )}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
    >
      {loading ? <span className="pui-spinner" aria-hidden="true" /> : icon}
      <span className="pui-button__label">{children}</span>
    </button>
  );
});

export type BotChallengeProvider = "turnstile" | "hcaptcha";

export interface BotChallengeProps {
  provider?: BotChallengeProvider;
  siteKey: string;
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
  action?: string;
  theme?: "light" | "dark" | "auto";
  className?: string;
}

type ChallengeApi = {
  render: (element: HTMLElement, options: Record<string, unknown>) => string;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: ChallengeApi;
    hcaptcha?: ChallengeApi;
  }
}

const challengeScripts: Record<BotChallengeProvider, string> = {
  turnstile: "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",
  hcaptcha: "https://js.hcaptcha.com/1/api.js?render=explicit",
};

/** Provider-neutral bot challenge. The response token is intentionally only
 * returned to the caller and is never persisted or logged by this component. */
export function BotChallenge({
  provider = "turnstile",
  siteKey,
  onVerify,
  onExpire,
  onError,
  action,
  theme = "auto",
  className,
}: BotChallengeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let widgetId: string | undefined;
    let cancelled = false;
    const scriptUrl = challengeScripts[provider];
    const selector = `script[data-pui-bot-challenge="${provider}"]`;
    let script = document.querySelector<HTMLScriptElement>(selector);

    const render = () => {
      const api = window[provider];
      if (cancelled || !api || !containerRef.current) return;
      containerRef.current.replaceChildren();
      widgetId = api.render(containerRef.current, {
        sitekey: siteKey,
        callback: onVerify,
        "expired-callback": onExpire,
        "error-callback": onError,
        action,
        theme,
      });
    };

    if (!script) {
      script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      script.defer = true;
      script.dataset.puiBotChallenge = provider;
      document.head.appendChild(script);
    }
    if (window[provider]) render();
    else script.addEventListener("load", render, { once: true });

    return () => {
      cancelled = true;
      script?.removeEventListener("load", render);
      if (widgetId) window[provider]?.remove(widgetId);
    };
  }, [action, onError, onExpire, onVerify, provider, siteKey, theme]);

  return (
    <div
      className={cx("pui-bot-challenge", className)}
      aria-label="人机验证"
      ref={containerRef}
    />
  );
}

export type CardType = "default" | "dashed";
export type CardColor = InkColor;
export type CardPattern = "none" | InkColor;

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  type?: CardType;
  color?: CardColor;
  pattern?: CardPattern;
  hoverable?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    type = "default",
    color = "default",
    pattern = "none",
    hoverable = false,
    className,
    children,
    ...props
  },
  ref,
) {
  return (
    <div
      {...props}
      ref={ref}
      className={cx(
        "pui-card",
        `pui-card--${type}`,
        `pui-tone--${color}`,
        pattern !== "none" && `pui-pattern--${pattern}`,
        hoverable && "pui-card--hoverable",
        className,
      )}
    >
      {children}
    </div>
  );
});

export interface CursorProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  forceAll?: boolean;
}

export function Cursor({ children, className, style }: CursorProps) {
  return (
    <div className={cx("pui-world", className)} style={style}>
      {children}
    </div>
  );
}

export type DividerType =
  | "line-brown"
  | "line-teal"
  | "line-white"
  | "line-yellow"
  | "wave-yellow"
  | "dashed-brown"
  | "dashed-teal"
  | "dashed-white"
  | "dashed-yellow";

export interface DividerProps {
  type?: DividerType;
  className?: string;
  style?: CSSProperties;
}

export function Divider({
  type = "line-brown",
  className,
  style,
}: DividerProps) {
  return (
    <div
      className={cx("pui-divider", `pui-divider--${type}`, className)}
      style={style}
      role="separator"
    >
      <span aria-hidden="true">· · ·</span>
    </div>
  );
}

export type FooterType = "sea" | "tree";

export interface FooterProps {
  type?: FooterType;
  seamless?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function Footer({
  type = "sea",
  seamless = false,
  className,
  style,
}: FooterProps) {
  return (
    <footer
      className={cx(
        "pui-footer",
        `pui-footer--${type}`,
        seamless && "pui-footer--seamless",
        className,
      )}
      style={style}
    >
      <div className="pui-footer__scribble" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
    </footer>
  );
}

export type InputSize = "small" | "middle" | "large";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> {
  size?: InputSize;
  prefix?: ReactNode;
  suffix?: ReactNode;
  allowClear?: boolean;
  status?: "error" | "warning";
  shadow?: boolean;
  onClear?: () => void;
  clearAriaLabel?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    size = "middle",
    prefix,
    suffix,
    allowClear = false,
    status,
    shadow = false,
    className,
    disabled,
    value,
    defaultValue,
    onChange,
    onClear,
    clearAriaLabel = "清除",
    ...props
  },
  forwardedRef,
) {
  const innerRef = useRef<HTMLInputElement>(null);
  const [localValue, setLocalValue] = useState(() => String(value ?? defaultValue ?? ""));
  useImperativeHandle(forwardedRef, () => innerRef.current as HTMLInputElement);
  const visibleValue = value !== undefined ? String(value) : localValue;

  const clear = () => {
    const input = innerRef.current;
    if (!input || disabled) return;
    const valueSetter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      "value",
    )?.set;
    valueSetter?.call(input, "");
    input.dispatchEvent(new Event("input", { bubbles: true }));
    setLocalValue("");
    onClear?.();
    input.focus();
  };

  return (
    <span
      className={cx(
        "pui-input-shell",
        `pui-input-shell--${size}`,
        status && `pui-input-shell--${status}`,
        shadow && "pui-input-shell--shadow",
        disabled && "pui-input-shell--disabled",
        className,
      )}
    >
      {prefix && <span className="pui-input__affix">{prefix}</span>}
      <input
        {...props}
        ref={innerRef}
        className="pui-input"
        disabled={disabled}
        value={value}
        defaultValue={defaultValue}
        onChange={(event) => {
          setLocalValue(event.currentTarget.value);
          onChange?.(event);
        }}
      />
      {allowClear && visibleValue && !disabled ? (
        <button
          type="button"
          className="pui-input__clear"
          aria-label={clearAriaLabel}
          onClick={clear}
        >
          ×
        </button>
      ) : null}
      {suffix && <span className="pui-input__affix">{suffix}</span>}
    </span>
  );
});

export type NamePath = string | number | Array<string | number>;
export type RuleType =
  | "string"
  | "number"
  | "boolean"
  | "integer"
  | "float"
  | "array"
  | "object"
  | "email"
  | "url"
  | "date";

export interface RuleObject {
  required?: boolean;
  message?: string;
  min?: number;
  max?: number;
  len?: number;
  pattern?: RegExp;
  whitespace?: boolean;
  type?: RuleType;
  validator?: (
    rule: RuleObject,
    value: unknown,
  ) => Promise<void | string> | void | string;
}

export type Rules = RuleObject[];
export type FormLayout = "horizontal" | "vertical" | "inline";
export type FormSize = "small" | "middle" | "large";

interface RegisteredField {
  rules: Rules;
}

interface FormContextValue {
  disabled: boolean;
  size: FormSize;
  errors: Record<string, string>;
  register: (name: string, field: RegisteredField) => () => void;
}

const FormContext = createContext<FormContextValue | null>(null);

function fieldName(name?: NamePath) {
  if (Array.isArray(name)) return name.join(".");
  return name === undefined ? "" : String(name);
}

async function validateRule(rule: RuleObject, value: unknown) {
  const text = typeof value === "string" ? value : "";
  const empty = value === undefined || value === null || text === "";
  if (rule.required && (empty || (rule.whitespace && text.trim() === ""))) {
    return rule.message ?? "此项为必填项";
  }
  if (!empty && rule.min !== undefined && text.length < rule.min) {
    return rule.message ?? `至少输入 ${rule.min} 个字符`;
  }
  if (!empty && rule.max !== undefined && text.length > rule.max) {
    return rule.message ?? `最多输入 ${rule.max} 个字符`;
  }
  if (!empty && rule.pattern && !rule.pattern.test(text)) {
    return rule.message ?? "输入格式不正确";
  }
  if (rule.validator) {
    const result = await rule.validator(rule, value);
    if (typeof result === "string") return result;
  }
  return "";
}

export interface FormProps<T = Record<string, unknown>>
  extends Omit<
    React.FormHTMLAttributes<HTMLFormElement>,
    "onSubmit" | "children" | "onReset"
  > {
  initialValues?: Partial<T>;
  layout?: FormLayout;
  size?: FormSize;
  disabled?: boolean;
  onFinish?: (values: T) => void;
  onFinishFailed?: (info: {
    values: Record<string, unknown>;
    errorFields: Array<{ name: NamePath; errors: string[] }>;
    outOfDate: boolean;
  }) => void;
  onReset?: (event: FormEvent<HTMLFormElement>) => void;
  children?: ReactNode;
}

type FormComponent = (<T = Record<string, unknown>>(
  props: FormProps<T> & { ref?: React.Ref<HTMLFormElement> },
) => ReactElement) & {
  Item: typeof FormItem;
};

const FormBase = forwardRef<HTMLFormElement, FormProps<Record<string, unknown>>>(
  function Form(
    {
      initialValues,
      layout = "vertical",
      size = "middle",
      disabled = false,
      onFinish,
      onFinishFailed,
      onReset,
      className,
      children,
      ...props
    },
    ref,
  ) {
    const fields = useRef(new Map<string, RegisteredField>());
    const [errors, setErrors] = useState<Record<string, string>>({});
    const register = (name: string, field: RegisteredField) => {
      fields.current.set(name, field);
      return () => {
        fields.current.delete(name);
      };
    };

    const context = useMemo(
      () => ({ disabled, size, errors, register }),
      [disabled, errors, size],
    );

    const submit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const values: Record<string, unknown> = { ...(initialValues ?? {}) };
      for (const [name, value] of data.entries()) values[name] = value;

      const nextErrors: Record<string, string> = {};
      for (const [name, field] of fields.current) {
        for (const rule of field.rules) {
          const message = await validateRule(rule, values[name]);
          if (message) {
            nextErrors[name] = message;
            break;
          }
        }
      }
      setErrors(nextErrors);

      if (Object.keys(nextErrors).length > 0) {
        onFinishFailed?.({
          values,
          errorFields: Object.entries(nextErrors).map(([name, message]) => ({
            name,
            errors: [message],
          })),
          outOfDate: false,
        });
        return;
      }
      onFinish?.(values);
    };

    return (
      <FormContext.Provider value={context}>
        <form
          {...props}
          ref={ref}
          className={cx("pui-form", `pui-form--${layout}`, className)}
          onSubmit={(event) => void submit(event)}
          onReset={(event) => {
            setErrors({});
            onReset?.(event);
          }}
        >
          {children}
        </form>
      </FormContext.Provider>
    );
  },
);

export interface FormItemProps {
  name?: NamePath;
  label?: ReactNode;
  rules?: Rules;
  required?: boolean;
  hidden?: boolean;
  help?: ReactNode;
  noStyle?: boolean;
  className?: string;
  children?: ReactNode;
}

export function FormItem({
  name,
  label,
  rules = [],
  required,
  hidden = false,
  help,
  noStyle = false,
  className,
  children,
}: FormItemProps) {
  const context = useContext(FormContext);
  const nameString = fieldName(name);
  const error = context?.errors[nameString];
  const fieldId = useId();
  const describedBy = `${fieldId}-help`;
  const isRequired = required ?? rules.some((rule) => rule.required);

  useEffect(() => {
    if (!context || !nameString) return;
    return context.register(nameString, { rules });
  }, [context, nameString, rules]);

  if (hidden) return null;

  const child = Children.only(children);
  const control = isValidElement(child)
    ? cloneElement(child as ReactElement<Record<string, unknown>>, {
        id: (child.props as { id?: string }).id ?? fieldId,
        name: nameString || undefined,
        size: (child.props as { size?: FormSize }).size ?? context?.size,
        disabled:
          Boolean((child.props as { disabled?: boolean }).disabled) ||
          context?.disabled,
        "aria-invalid": Boolean(error) || undefined,
        "aria-describedby": error || help ? describedBy : undefined,
      })
    : child;

  if (noStyle) return control;

  return (
    <div className={cx("pui-form-item", className)}>
      {label ? (
        <label className="pui-form-item__label" htmlFor={fieldId}>
          {label}
          {isRequired ? <span aria-hidden="true"> *</span> : null}
        </label>
      ) : null}
      {control}
      {error || help ? (
        <div
          id={describedBy}
          className={cx("pui-form-item__help", error && "pui-form-item__help--error")}
          role={error ? "alert" : undefined}
        >
          {error || help}
        </div>
      ) : null}
    </div>
  );
}

export const Form = FormBase as unknown as FormComponent;
Form.Item = FormItem;

export interface ModalProps {
  open: boolean;
  title?: ReactNode;
  width?: number | string;
  maskClosable?: boolean;
  footer?: ReactNode | null;
  onClose?: () => void;
  onOk?: () => void;
  children?: ReactNode;
  className?: string;
  typeSpeed?: number;
  typewriter?: boolean;
  maskStyle?: CSSProperties;
}

export function Modal({
  open,
  title,
  width = 520,
  maskClosable = true,
  footer,
  onClose,
  children,
  className,
  maskStyle,
}: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    const frame = requestAnimationFrame(() => {
      const target = panelRef.current?.querySelector<HTMLElement>(
        '[autofocus], [tabindex="0"], button:not([disabled]), input:not([disabled])',
      );
      (target ?? panelRef.current)?.focus();
    });
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [open]);

  if (typeof document === "undefined" || !open) return null;

  return createPortal(
    <div
      className="pui-modal-mask"
      style={maskStyle}
      onMouseDown={(event) => {
        if (maskClosable && event.target === event.currentTarget) onClose?.();
      }}
    >
      <div
        ref={panelRef}
        className={cx("pui-modal", className)}
        style={{ width }}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        tabIndex={-1}
        onKeyDown={(event) => {
          if (event.key === "Escape" && maskClosable) onClose?.();
          if (event.key !== "Tab") return;
          const focusable = Array.from(
            event.currentTarget.querySelectorAll<HTMLElement>(
              'button:not([disabled]), input:not([disabled]), [tabindex="0"]',
            ),
          );
          if (focusable.length === 0) {
            event.preventDefault();
            return;
          }
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }}
      >
        <span className="pui-modal__tape" aria-hidden="true" />
        {title ? (
          <h2 id={titleId} className="pui-modal__title">
            {title}
          </h2>
        ) : null}
        <div className="pui-modal__body">{children}</div>
        {footer !== null ? (
          <div className="pui-modal__footer">
            {footer ?? <Button type="primary" onClick={onClose}>确定</Button>}
          </div>
        ) : null}
      </div>
    </div>,
    document.body,
  );
}

export type ProgressSize = "small" | "middle" | "large";
export type ProgressInfoPosition = "inside" | "right" | "top";

export interface ProgressProps {
  percent: number;
  size?: ProgressSize;
  showInfo?: boolean;
  infoPosition?: ProgressInfoPosition;
  infoFormat?: (percent: number) => ReactNode;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}

export function Progress({
  percent,
  size = "middle",
  showInfo = true,
  infoPosition = "right",
  infoFormat,
  duration = 0.35,
  className,
  style,
}: ProgressProps) {
  const safePercent = Math.max(0, Math.min(100, Math.round(percent)));
  const info = infoFormat?.(safePercent) ?? `${safePercent}%`;
  return (
    <div
      className={cx(
        "pui-progress",
        `pui-progress--${size}`,
        `pui-progress--info-${infoPosition}`,
        className,
      )}
      style={style}
    >
      {showInfo && infoPosition === "top" ? (
        <span className="pui-progress__info">{info}</span>
      ) : null}
      <div
        className="pui-progress__track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={safePercent}
      >
        <span
          className="pui-progress__fill"
          style={{ width: `${safePercent}%`, transitionDuration: `${duration}s` }}
        />
        {showInfo && infoPosition === "inside" ? (
          <span className="pui-progress__inside">{info}</span>
        ) : null}
      </div>
      {showInfo && infoPosition === "right" ? (
        <span className="pui-progress__info">{info}</span>
      ) : null}
    </div>
  );
}

export type RadioSize = "small" | "middle" | "large";

export interface RadioOption {
  label: ReactNode;
  value: string | number;
  disabled?: boolean;
}

export interface RadioProps {
  value?: string | number;
  defaultValue?: string | number;
  options: RadioOption[];
  size?: RadioSize;
  disabled?: boolean;
  direction?: "horizontal" | "vertical";
  onChange?: (value: string | number) => void;
  className?: string;
  style?: CSSProperties;
}

export function Radio({
  value,
  defaultValue,
  options,
  size = "middle",
  disabled = false,
  direction = "horizontal",
  onChange,
  className,
  style,
}: RadioProps) {
  const name = useId();
  const [internal, setInternal] = useState(defaultValue);
  const selected = value ?? internal;
  return (
    <fieldset
      className={cx(
        "pui-radio",
        `pui-radio--${size}`,
        `pui-radio--${direction}`,
        className,
      )}
      style={style}
    >
      {options.map((option) => (
        <label className="pui-radio__option" key={String(option.value)}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selected === option.value}
            disabled={disabled || option.disabled}
            onChange={() => {
              setInternal(option.value);
              onChange?.(option.value);
            }}
          />
          <span className="pui-radio__mark" aria-hidden="true" />
          <span>{option.label}</span>
        </label>
      ))}
    </fieldset>
  );
}

export interface TabItem {
  key: string;
  label: ReactNode;
  children: ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultActiveKey?: string;
  activeKey?: string;
  onChange?: (key: string) => void;
  className?: string;
  style?: CSSProperties;
  leafAnimation?: boolean;
  shadow?: boolean;
  "aria-label"?: string;
}

export function Tabs({
  items,
  defaultActiveKey,
  activeKey,
  onChange,
  className,
  style,
  shadow = false,
  "aria-label": ariaLabel,
}: TabsProps) {
  const [internalKey, setInternalKey] = useState(
    defaultActiveKey ?? items[0]?.key ?? "",
  );
  const selectedKey = activeKey ?? internalKey;
  const baseId = useId();
  const select = (key: string) => {
    setInternalKey(key);
    onChange?.(key);
  };
  const activeItem = items.find((item) => item.key === selectedKey) ?? items[0];

  return (
    <div
      className={cx("pui-tabs", shadow && "pui-tabs--shadow", className)}
      style={style}
    >
      <div className="pui-tabs__list" role="tablist" aria-label={ariaLabel}>
        {items.map((item, index) => {
          const selected = item.key === activeItem?.key;
          return (
            <button
              type="button"
              role="tab"
              id={`${baseId}-tab-${item.key}`}
              aria-controls={`${baseId}-panel-${item.key}`}
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              className="pui-tabs__tab"
              key={item.key}
              onClick={() => select(item.key)}
              onKeyDown={(event) => {
                if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
                  return;
                }
                event.preventDefault();
                const offset =
                  event.key === "Home"
                    ? -index
                    : event.key === "End"
                      ? items.length - index - 1
                      : event.key === "ArrowRight"
                        ? 1
                        : -1;
                const nextIndex = (index + offset + items.length) % items.length;
                select(items[nextIndex].key);
                event.currentTarget.parentElement
                  ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
                  [nextIndex]?.focus();
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {activeItem ? (
        <div
          className="pui-tabs__panel"
          role="tabpanel"
          id={`${baseId}-panel-${activeItem.key}`}
          aria-labelledby={`${baseId}-tab-${activeItem.key}`}
        >
          {activeItem.children}
        </div>
      ) : null}
    </div>
  );
}

export type TagSize = "small" | "medium" | "large";
export type TagVariant = "solid" | "outlined" | "dashed";
export type TagColor = InkColor;

export interface TagProps {
  children?: ReactNode;
  size?: TagSize;
  variant?: TagVariant;
  color?: TagColor;
  closable?: boolean;
  onClose?: (event: React.MouseEvent<HTMLElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function Tag({
  children,
  size = "medium",
  variant = "solid",
  color = "default",
  closable = false,
  onClose,
  onClick,
  disabled = false,
  className,
  style,
}: TagProps) {
  return (
    <span
      className={cx(
        "pui-tag",
        `pui-tag--${size}`,
        `pui-tag--${variant}`,
        `pui-tone--${color}`,
        disabled && "pui-tag--disabled",
        onClick && "pui-tag--clickable",
        className,
      )}
      style={style}
      onClick={disabled ? undefined : onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick && !disabled ? 0 : undefined}
      onKeyDown={
        onClick && !disabled
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onClick(event as unknown as React.MouseEvent<HTMLElement>);
              }
            }
          : undefined
      }
    >
      {children}
      {closable ? (
        <button
          type="button"
          className="pui-tag__close"
          aria-label="关闭"
          disabled={disabled}
          onClick={(event) => {
            event.stopPropagation();
            onClose?.(event);
          }}
        >
          ×
        </button>
      ) : null}
    </span>
  );
}

export interface TimeProps {
  className?: string;
}

export function Time({ className }: TimeProps) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const initialTimer = window.setTimeout(() => setNow(new Date()), 0);
    const timer = window.setInterval(() => setNow(new Date()), 60_000);
    return () => {
      window.clearTimeout(initialTimer);
      window.clearInterval(timer);
    };
  }, []);
  return (
    <time
      className={cx("pui-time", className)}
      dateTime={now?.toISOString()}
      aria-label={now ? now.toLocaleString("zh-CN") : "正在读取时间"}
    >
      <strong>{now?.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" }) ?? "–:–"}</strong>
      <span>{now?.toLocaleDateString("zh-CN", { month: "short", day: "numeric" }) ?? "今天"}</span>
    </time>
  );
}

export type TitleSize = "small" | "middle" | "large";
export type TitleColor = InkColor;

export interface TitleProps {
  children: ReactNode;
  size?: TitleSize;
  color?: TitleColor;
  className?: string;
  style?: CSSProperties;
}

export function Title({
  children,
  size = "middle",
  color = "default",
  className,
  style,
}: TitleProps) {
  return (
    <h2
      className={cx(
        "pui-title",
        `pui-title--${size}`,
        `pui-tone--${color}`,
        className,
      )}
      style={style}
    >
      <span>{children}</span>
    </h2>
  );
}
