"use client";

import * as RadixSelect from "@radix-ui/react-select";

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  label: string;
  value: string;
  options: SelectOption[];
  onValueChange: (value: string) => void;
  placeholder?: string;
};

export function Select({
  label,
  value,
  options,
  onValueChange,
  placeholder = "Select option",
}: SelectProps) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-semibold text-foreground">{label}</label>

      <RadixSelect.Root value={value} onValueChange={onValueChange}>
        <RadixSelect.Trigger className="flex h-11 min-w-[220px] items-center justify-between rounded-xl border border-input bg-background px-4 text-sm text-foreground shadow-sm outline-none transition hover:bg-muted focus:ring-2 focus:ring-ring">
          <RadixSelect.Value placeholder={placeholder} />
          <RadixSelect.Icon className="text-muted-foreground">⌄</RadixSelect.Icon>
        </RadixSelect.Trigger>

        <RadixSelect.Portal>
          <RadixSelect.Content
            position="popper"
            sideOffset={8}
            className="z-50 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground shadow-xl"
          >
            <RadixSelect.Viewport className="p-2">
              {options.map((option) => (
                <RadixSelect.Item
                  key={option.value}
                  value={option.value}
                  className="relative flex cursor-pointer select-none items-center rounded-lg px-3 py-2 pr-8 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground"
                >
                  <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
                  <RadixSelect.ItemIndicator className="absolute right-3 font-bold text-premium">
                    ✓
                  </RadixSelect.ItemIndicator>
                </RadixSelect.Item>
              ))}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </div>
  );
}